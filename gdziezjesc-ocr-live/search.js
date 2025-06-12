
export async function fetchResults(dish, city) {
  console.log("Symulowane wyszukiwanie:", dish, city);

  return [
    {
      name: "Pizzeria Hawajska",
      vicinity: city + ", ul. Fikcyjna 1",
      rating: 4.5,
      user_ratings_total: 123,
      geometry: {
        location: {
          lat: 50.675,
          lng: 17.921
        }
      },
      photos: [
        {
          photo_reference: "fakephoto123"
        }
      ],
      place_id: "fakeplaceid123",
      ocrText: dish + " z ananasem, szynką i serem"
    },
    {
      name: "Pizza Opolska",
      vicinity: city + ", ul. Smaczna 2",
      rating: 4.2,
      user_ratings_total: 89,
      geometry: {
        location: {
          lat: 50.676,
          lng: 17.922
        }
      },
      photos: [],
      place_id: "fakeplaceid456",
      ocrText: dish + " klasyczna bez ananasa"
    }
  ];
}
