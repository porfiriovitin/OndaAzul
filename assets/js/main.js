
function initMap() {
  // Configurações iniciais do mapa
  var mapOptions = {
    center: new google.maps.LatLng(-24.014380, -46.422533),
    zoom: 14,
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    mapId: 'ee95d6630cdd012c'
    };
    
    // Cria o mapa
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    
    // Função para adicionar um marcador pulsante
    function addPulsatingMarker(lat, lng) {
      // Cria o elemento do marcador com a animação de pulso
      var pulsatingMarker = document.createElement('div');
      pulsatingMarker.className = 'pulse data-toggle="modal" data-target="#staticBackdrop"';
      
      // Cria um OverlayView para adicionar o elemento ao mapa
      var overlay = new google.maps.OverlayView();
      overlay.onAdd = function() {
        var layer = this.getPanes().overlayMouseTarget;
        layer.appendChild(pulsatingMarker);
        
        // Adiciona o evento de clique ao marcador
        pulsatingMarker.addEventListener('click', function() {
          var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
          myModal.show();
          });
          };
          overlay.draw = function() {
            var position = this.getProjection().fromLatLngToDivPixel(marker.getPosition());
            pulsatingMarker.style.left = position.x + 'px';
            pulsatingMarker.style.top = position.y + 'px';
            };
            overlay.setMap(map);
            
            // Define o marcador no mapa
            var marker = new google.maps.Marker({
          position: new google.maps.LatLng(lat, lng),
          map: map,
          visible: false // Esconde o marcador padrão
          });
          }
  // Adiciona um marcador de exemplo
  addPulsatingMarker(-24.014380, -46.422533);
  addPulsatingMarker(-24.017935, -46.398959);
}

AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});