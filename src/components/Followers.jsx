import React from "react";
import Paginate from "./Paginate";
import CardFollowers from "./CardFollowers";
import loadingGif from "../assets/loading.gif";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";

const Followers = ({ followers }) => {
  const { loading, followersList } = followers;
  const [followersPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastFollower = currentPage * followersPerPage;
  const indexOffFirstFollower = indexOfLastFollower - followersPerPage;
  const currentFollowers = followersList.slice(
    indexOffFirstFollower,
    indexOfLastFollower
  );
  const totalPages = Math.ceil(followersList.length / followersPerPage);

  return (
    <div>
      {loading ? (
        <div>
          <img src={loadingGif} alt="loading..." />
        </div>
      ) : (
        <div>
          <Container>
            <Row xs={2} md={3} lg={4}>
              {currentFollowers?.map((follower, index) => (
                <div key={index}>
                  <CardFollowers follower={follower} />
                </div>
              ))}
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Followers;
