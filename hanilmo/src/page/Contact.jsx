import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import addr from '../img/addr.jpg';

export const Contact = () => {
  useEffect(() => {
    const { kakao } = window;
    if (kakao) {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(35.2364009, 128.5800557),
        level: 4,
      };
      const map = new kakao.maps.Map(container, options);

      var mapTypeControl = new kakao.maps.MapTypeControl();
      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

      const zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

      const markerPosition = new kakao.maps.LatLng(35.2364009, 128.5800557);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>한일모 :: 오시는길</title>
      </Helmet>
      <AddressImg src={addr} />
      <Map id="map"></Map>
    </>
  );
};

const AddressImg = styled.img`
  margin: auto;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Map = styled.div`
  margin: auto;
  width: 620px;
  height: 450px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
