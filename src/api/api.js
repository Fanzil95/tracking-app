
export async function getListGoordinates (f,t, func) {
    try{
        const requests = await fetch(`http://router.project-osrm.org/route/v1/driving/${f};${t}?alternatives=false&steps=false&geometries=geojson&overview=full&annotations=false`)
        const polylines = await requests.json()
        polylines.routes.map(route=>func(route.geometry.coordinates))
    
    }catch (error){
        console.error(error)
    }finally{
        console.log('finally')
    }    
}
        


