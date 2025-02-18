// import getListings, { IListingsParams } from "@/app/common/actions/getListings";
// import getCurrentUser from "@/app/common/actions/getCurrentUser";
import Container from "@/src/shared/components/common/Container";
import EmptyState from "@/src/shared/components/common/EmptyState";
import ListingCard from "@/src/shared/components/listing/ListingCard";
import Map from "@/src/shared/components/common/Map";
import ClientOnly from "@/src/shared/components/common/ClientOnly";
import MapToggleBtn from "@/src/modules/landing/components/MapToggleBtn";
import { useState } from "react";

// interface HomeProps {
//   searchParams: IListingsParams
// };

const SearchPage = async ({ searchParams }: any) => {
  // const listings = await getListings(searchParams);
  // const currentUser = await getCurrentUser();

  //const [mapTabIsActive , setMapTabIsActive] = useState<boolean>(false)

  const listings = [
    {
      "id": "6152b8ee11e2e40a362cd4a1",
      "title": "Luxurious Beach House",
      "description": "Experience the ultimate beachfront vacation in this luxurious house.",
      "imageSrc": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "createdAt": "2023-08-21T10:00:00Z",
      "category": "ماشین ",
      "roomCount": 4,
      "bathroomCount": 3,
      "guestCount": 8,
      "locationValue": "Beachfront",
      "userId": "6152b8ee11e2e40a362cd499",
      "price": "500,000"
    },
    {
      "id": "6152b8ee11e2e40a362cd4a2",
      "title": "Cozy Mountain Cabin",
      "description": "Escape to the mountains and enjoy the serenity of nature in this cozy cabin.",
      "imageSrc": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "createdAt": "2023-08-20T15:30:00Z",
      "category": "ماشین",
      "roomCount": 2,
      "bathroomCount": 1,
      "guestCount": 4,
      "locationValue": "Mountain Retreat",
      "userId": "6152b8ee11e2e40a362cd49a",
      "price": 300
    },
    {
      "id": "6152b8ee11e2e40a362cd4a3",
      "title": "Downtown Loft Apartment",
      "description": "Experience city living at its finest in this modern downtown loft.",
      "imageSrc": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "createdAt": "2023-08-19T12:45:00Z",
      "category": "ماشین",
      "roomCount": 1,
      "bathroomCount": 1,
      "guestCount": 2,
      "locationValue": "City Center",
      "userId": "6152b8ee11e2e40a362cd49b",
      "price": 150
    }
  ]

  if (listings.length === 0) {
    return <EmptyState showReset />
  }

  return (
  <>
        <div
        className="grid 
        grid-cols-1
        sm:grid-cols-3
        "
        >
        

          <div
            className="
          pt-8
          px-2
          grid 
          grid-cols-1 
          sm:grid-cols-3
          gap-2
          col-span-2
        "
          >
            {listings.map((listing: any) => (
              <ListingCard
                // currentUser={currentUser}
                key={listing.id}
                data={listing}
              />
            ))}
          </div>
          <div className={'h-[100vh] '}>
          <Map/>
          </div>
        </div>
        </>
  )
}

export default SearchPage;