
//f-fromCoordinate, t-toCoordinate

export function getListGoordinates (f,t, func)  {
    fetch(`http://router.project-osrm.org/route/v1/driving/${f};${t}?alternatives=false&steps=false&geometries=geojson&overview=full&annotations=false`)
        .then(response => response.json())
        .then(poly => {
        poly.routes.map(route=>func(route.geometry.coordinates))
        })
}
 



