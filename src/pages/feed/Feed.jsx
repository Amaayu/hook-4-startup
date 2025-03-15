import React, { useEffect } from "react";
import "./Feed.css";
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card";

const Feed = () => {
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // ✅ Session token को cookies से लेंगे
        const cookies = document.cookie
          .split("; ")
          .find((row) => row.startsWith("session_token="));
        const sessionToken = cookies ? cookies.split("=")[1] : null;

        if (!sessionToken) {
          console.warn("Session token not found!");
          return;
        }

        const response = await fetch(
          "https://hook4startup-bakend-java-dev.onrender.com/user/users",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${sessionToken}`, // ✅ Token को भेजना जरूरी
            },
          }
        );

        if (!response.ok) {
          console.error("Failed to fetch users:", response.statusText);
          return;
        }

        const users = await response.json();
        console.log("Fetched Users:", users); // ✅ Console में users दिखाओ
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers(); // ✅ API Call on component mount
  }, []);

  return (
    <>
      <div className="feed">
        <nav>
          <div className="nav-right">
            <i className="ri-menu-2-line"></i>
            <span>Menu</span>
          </div>

          <p>Hook 4 startup</p>
          <div className="nav-left">
            <i className="ri-team-line"></i>
            <span>Meet Up</span>
          </div>
        </nav>

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

        <Footer />
      </div>
    </>
  );
};

export default Feed;
