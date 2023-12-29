import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { IoReloadCircle } from "react-icons/io5";
import "../styles/offers.css";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import Spinner from "../components/Spinner";
import ListingItem from "../components/ListingItem";

const Offers = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastFetchListing, setLastFetchListing] = useState(null);

  //fetch listing
  useEffect(() => {
    const fetchListing = async () => {
      try {
        const listingsRef = collection(db, "listings");
        const q = query(
          listingsRef,
          where("offer", "==", true),
          orderBy("timestamp", "desc"),
          limit(10)
        );
        const querySnap = await getDocs(q);
        const lastVisible = querySnap.docs[querySnap.docs.length - 1];
        setLastFetchListing(lastVisible);
        const listings = [];
        querySnap.forEach((doc) => {
          listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setListings(listings);
        setLoading(false);
      } catch (error) {
        console.log(error);
        toast.error("Unable to fetch data");
      }
    };
    fetchListing();
  }, []);

  //loadmore pagination func
  const fetchLoadMoreListing = async () => {
    try {
      setLoading(true); // Set loading to true when loading more listings
      const listingsRef = collection(db, "listings");
      const q = query(
        listingsRef,
        where("offer", "==", true),
        orderBy("timestamp", "desc"),
        startAfter(lastFetchListing),
        limit(10)
      );
      const querySnap = await getDocs(q);
      const lastVisible = querySnap.docs[querySnap.docs.length - 1];
      setLastFetchListing(lastVisible);
      const newlistings = [];
      querySnap.forEach((doc) => {
        newlistings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings((prevListings) => [...prevListings, ...newlistings]); // Append new listings to the existing ones
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Unable to fetch data");
    }
  };

  return (
    <Layout title="best offer on house">
      <div className="offers pt-3 container-fluid">
        <h1>
          {" "}
          <img src="/assets/offer.png" alt="offers" className="offer-img" />{" "}
          Best Offers
        </h1>
        {loading ? (
          <Spinner />
        ) : listings && listings.length > 0 ? (
          <div>
            {listings.map((list) => (
              <ListingItem listing={list.data} id={list.id} key={list.id} />
            ))}
          </div>
        ) : (
          <p>There Are No Current Offers</p>
        )}
        <div className="d-flex align-items-center justify-content-center pb-4 mt-4">
          {lastFetchListing && (
            <button className="load-btn" onClick={fetchLoadMoreListing}>
              <IoReloadCircle /> load more
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Offers;
