import { useEffect, useState } from "react"
import styled from "styled-components"

const Cars = () => {
    const [page,setPage] = useState(0)
    const [cars,setCars] = useState([])

    useEffect(() => {
        setCars([{
            "carId": "55184922-2913-4cfd-96b2-a3bc809841b8",
            "make": "Pontiac",
            "model": "Aztek",
            "year": 2003,
            "automatic": true,
            "doors": 3,
            "power": 128,
            "price": 76,
            "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
          }, {
            "carId": "f4162128-3c56-4b5d-ad57-5ea5efc44e9b",
            "make": "Chrysler",
            "model": "Town & Country",
            "year": 2008,
            "automatic": true,
            "doors": 2,
            "power": 45,
            "price": 83,
            "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
          }, {
            "carId": "cfb662e1-736d-4d23-94d2-4bbe4e9978e9",
            "make": "Ferrari",
            "model": "599 GTB Fiorano",
            "year": 2007,
            "automatic": false,
            "doors": 3,
            "power": 102,
            "price": 79,
            "image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
          }, {
            "carId": "40758fb3-d7d6-4280-90a3-4189182bf02d",
            "make": "Rolls-Royce",
            "model": "Phantom",
            "year": 2010,
            "automatic": false,
            "doors": 3,
            "power": 178,
            "price": 80,
            "image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
          }, {
            "carId": "11784e89-ea17-4efb-ae4a-8337b17600c1",
            "make": "Ram",
            "model": "2500",
            "year": 2011,
            "automatic": true,
            "doors": 4,
            "power": 224,
            "price": 83,
            "image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
          }, {
            "carId": "e4e479c5-f961-4225-9bd7-6a2e1607fba0",
            "make": "Lexus",
            "model": "IS-F",
            "year": 2012,
            "automatic": true,
            "doors": 2,
            "power": 48,
            "price": 122,
            "image": "http://dummyimage.com/100x100.png/dddddd/000000"
          }, {
            "carId": "1d9ffbb2-62a4-4210-aff6-3538caa1c072",
            "make": "Pontiac",
            "model": "Montana",
            "year": 2005,
            "automatic": false,
            "doors": 5,
            "power": 165,
            "price": 144,
            "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
          }, {
            "carId": "45c5571d-7090-40a3-9633-a389d32ac251",
            "make": "Chevrolet",
            "model": "Corvette",
            "year": 2012,
            "automatic": true,
            "doors": 2,
            "power": 59,
            "price": 100,
            "image": "http://dummyimage.com/100x100.png/dddddd/000000"
          }, {
            "carId": "799d5492-cbd5-4032-aa63-a642be183ee1",
            "make": "Volkswagen",
            "model": "Passat",
            "year": 1993,
            "automatic": true,
            "doors": 3,
            "power": 238,
            "price": 118,
            "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
          }, {
            "carId": "2ea65618-831c-4943-846a-7aa945ed8daa",
            "make": "Ford",
            "model": "Excursion",
            "year": 2004,
            "automatic": true,
            "doors": 4,
            "power": 246,
            "price": 79,
            "image": "http://dummyimage.com/100x100.png/dddddd/000000"
          }]
          )
    },[])

    return (
        <>
            <CarsWrapper>
                {cars.slice(page,page + 9).map((car,i) => 
                    <StyledCar key={car.carId} class={`div${i+1}`} car={car}></StyledCar>)
                }
            </CarsWrapper>
        </>
    )
}

const CarsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    * {
        min-width: 25%;
    }
`

const Car = ({ car }) => {
    return (
        <div>
            <img src={car.image} alt={`${car.model} image`} />
            <div class="info">
                {car.model} {car.make} {car.year} {car.automatic?'automatic':'manual'} {car.doors} {car.power} {car.price}
            </div>
        </div>
    )
}

const StyledCar = styled(Car)`
    margin: auto;
`

export default Cars