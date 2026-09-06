(() => {
  "use strict";

  const STYLE_URL = "https://tiles.openfreemap.org/styles/liberty";
  const BUILDING_3D_LAYER_ID = "building-3d";
  const BUILDING_FALLBACK_LAYER_ID = "trip-3d-buildings";

  const els = {
    map: document.getElementById("map"),
    banner: document.getElementById("national-banner"),
    panel: document.getElementById("city-panel"),
    cityTitle: document.getElementById("city-title"),
    citySubtitle: document.getElementById("city-subtitle"),
    itineraryList: document.getElementById("itinerary-list"),
    discoverList: document.getElementById("discover-list"),
    zoomOutBtn: document.getElementById("btn-zoom-out"),
  };

  const state = {
    view: "national",
    cityId: null,
  };

  const cityMarkers = new Map();
  const stopMarkers = [];
  let activePopup = null;

  const map = new maplibregl.Map({
    container: els.map,
    style: STYLE_URL,
    center: tripData.national.center,
    zoom: tripData.national.zoom,
    pitch: tripData.national.pitch,
    bearing: tripData.national.bearing,
    antialias: true,
  });

  map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), "bottom-right");
  map.addControl(new maplibregl.ScaleControl({ maxWidth: 120 }), "bottom-left");

  map.on("load", () => {
    prepareBuildingLayers();
    setBuildingsVisible(false);
    createCityMarkers();
  });

  map.on("style.load", () => {
    prepareBuildingLayers();
    setBuildingsVisible(state.view === "city");
  });

  els.zoomOutBtn.addEventListener("click", () => showNationalView());

  function createCityMarkers() {
    Object.values(tripData.cities).forEach((city) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "city-marker";
      button.setAttribute("aria-label", `Open ${city.name} city view`);
      button.innerHTML = `
        <span class="city-marker__dot" aria-hidden="true"></span>
        <span class="city-marker__label">${city.name}</span>
      `;
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        showCityView(city.id);
      });

      const marker = new maplibregl.Marker({ element: button, anchor: "bottom" })
        .setLngLat(city.coordinates)
        .addTo(map);

      cityMarkers.set(city.id, marker);
    });
  }

  function setCityMarkersVisible(visible) {
    cityMarkers.forEach((marker) => {
      marker.getElement().style.display = visible ? "flex" : "none";
    });
  }

  function clearStopMarkers() {
    stopMarkers.forEach((marker) => marker.remove());
    stopMarkers.length = 0;
  }

  function closePopup() {
    if (activePopup) {
      activePopup.remove();
      activePopup = null;
    }
  }

  function showNationalView() {
    state.view = "national";
    state.cityId = null;

    closePopup();
    clearStopMarkers();
    setCityMarkersVisible(true);
    setBuildingsVisible(false);

    els.banner.classList.remove("is-hidden");
    els.panel.classList.remove("is-open");
    els.panel.setAttribute("aria-hidden", "true");

    map.flyTo({
      center: tripData.national.center,
      zoom: tripData.national.zoom,
      pitch: tripData.national.pitch,
      bearing: tripData.national.bearing,
      essential: true,
      duration: 2200,
      curve: 1.4,
    });
  }

  function showCityView(cityId) {
    const city = tripData.cities[cityId];
    if (!city) return;

    state.view = "city";
    state.cityId = cityId;

    closePopup();
    clearStopMarkers();
    setCityMarkersVisible(false);
    setBuildingsVisible(true);
    renderCityPanel(city);
    createStopMarkers(city);

    els.banner.classList.add("is-hidden");
    els.panel.classList.add("is-open");
    els.panel.setAttribute("aria-hidden", "false");

    map.flyTo({
      center: city.coordinates,
      zoom: city.zoom,
      pitch: city.pitch,
      bearing: city.bearing,
      essential: true,
      duration: 2800,
      curve: 1.6,
      speed: 0.7,
    });
  }

  function renderCityPanel(city) {
    els.cityTitle.textContent = city.name;
    els.citySubtitle.textContent = `${city.itineraryStops.length} itinerary stops · ${city.nearbySuggestions.length} discoveries`;

    els.itineraryList.innerHTML = "";
    city.itineraryStops.forEach((stop) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "stop-card";
      card.setAttribute("aria-label", `Show ${stop.name} on the map`);
      card.innerHTML = `
        <div class="stop-card__media" style="background-image:url('${stop.image}')"></div>
        <div class="stop-card__body">
          <h4>${escapeHtml(stop.name)}</h4>
          <p>${escapeHtml(stop.summary)}</p>
        </div>
      `;
      card.addEventListener("click", () => focusStop(stop));
      els.itineraryList.appendChild(card);
    });

    els.discoverList.innerHTML = "";
    city.nearbySuggestions.forEach((item) => {
      const card = document.createElement("div");
      card.className = "discover-card";
      card.innerHTML = `
        <div class="discover-card__body">
          <span class="discover-card__tag">${escapeHtml(item.tag || "Nearby")}</span>
          <h4>${escapeHtml(item.name)}</h4>
          <p>${escapeHtml(item.summary)}</p>
        </div>
      `;
      els.discoverList.appendChild(card);
    });

    els.panel.querySelector(".city-panel__scroll").scrollTop = 0;
  }

  function createStopMarkers(city) {
    city.itineraryStops.forEach((stop) => {
      const el = document.createElement("button");
      el.type = "button";
      el.className = "stop-marker";
      el.setAttribute("aria-label", stop.name);
      el.addEventListener("click", (event) => {
        event.stopPropagation();
        focusStop(stop);
      });

      const marker = new maplibregl.Marker({ element: el, anchor: "center" })
        .setLngLat(stop.coordinates)
        .addTo(map);

      stopMarkers.push(marker);
    });
  }

  function focusStop(stop) {
    closePopup();

    const offset = window.matchMedia("(max-width: 720px)").matches
      ? [0, -80]
      : [120, 0];

    map.easeTo({
      center: stop.coordinates,
      zoom: Math.max(map.getZoom(), 14.2),
      duration: 900,
      offset,
      essential: true,
    });

    const html = `
      <div class="popup-card">
        <img src="${escapeAttr(stop.image)}" alt="${escapeAttr(stop.name)}" />
        <div class="popup-card__body">
          <h4>${escapeHtml(stop.name)}</h4>
          <p>${escapeHtml(stop.summary)}</p>
        </div>
      </div>
    `;

    activePopup = new maplibregl.Popup({
      closeButton: true,
      closeOnClick: true,
      maxWidth: "280px",
      offset: 18,
    })
      .setLngLat(stop.coordinates)
      .setHTML(html)
      .addTo(map);
  }

  function prepareBuildingLayers() {
    // OpenFreeMap Liberty already ships a fill-extrusion layer; prefer it.
    if (map.getLayer(BUILDING_3D_LAYER_ID)) return;
    if (map.getLayer(BUILDING_FALLBACK_LAYER_ID)) return;

    const layers = map.getStyle().layers || [];
    let labelLayerId;
    for (const layer of layers) {
      if (layer.type === "symbol" && layer.layout && layer.layout["text-field"]) {
        labelLayerId = layer.id;
        break;
      }
    }

    const sources = map.getStyle().sources || {};
    const sourceId = ["openmaptiles", "carto", "composite"]
      .find((id) => sources[id]) ||
      Object.keys(sources).find((id) => sources[id].type === "vector");

    if (!sourceId) return;

    try {
      map.addLayer(
        {
          id: BUILDING_FALLBACK_LAYER_ID,
          source: sourceId,
          "source-layer": "building",
          type: "fill-extrusion",
          minzoom: 14,
          paint: {
            "fill-extrusion-color": "#d7e6ec",
            "fill-extrusion-height": [
              "coalesce",
              ["get", "render_height"],
              ["get", "height"],
              8,
            ],
            "fill-extrusion-base": [
              "coalesce",
              ["get", "render_min_height"],
              ["get", "min_height"],
              0,
            ],
            "fill-extrusion-opacity": 0.7,
          },
        },
        labelLayerId
      );
    } catch (error) {
      console.warn("Could not add 3D building layer:", error);
    }
  }

  function setBuildingsVisible(visible) {
    prepareBuildingLayers();
    const layerId = map.getLayer(BUILDING_3D_LAYER_ID)
      ? BUILDING_3D_LAYER_ID
      : map.getLayer(BUILDING_FALLBACK_LAYER_ID)
        ? BUILDING_FALLBACK_LAYER_ID
        : null;
    if (!layerId) return;
    map.setLayoutProperty(layerId, "visibility", visible ? "visible" : "none");
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeAttr(value) {
    return escapeHtml(value);
  }
})();
