import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
`

export const Content = styled.div`
  width: 100%;
  background: #F5FFFE;
  box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.24);
  /* border-radius: 24px 24px 0px 0px; */
  /* height: calc(100vh - (105px + 32px * 2)); */
  overflow: auto;
  padding: 32px;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1158%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(239%2c 243%2c 249%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c381.863C78.635%2c403.059%2c172.525%2c418.969%2c239.181%2c372.174C305.84%2c325.378%2c302.653%2c227.377%2c329.558%2c150.504C353.702%2c81.518%2c392.834%2c17.057%2c389.014%2c-55.932C384.998%2c-132.667%2c354.751%2c-205.876%2c307.726%2c-266.647C258.99%2c-329.629%2c198.062%2c-396.173%2c118.915%2c-404.987C41.051%2c-413.658%2c-16.869%2c-335.407%2c-91.343%2c-311.086C-162.571%2c-287.826%2c-246.552%2c-310.345%2c-306.901%2c-265.932C-372.218%2c-217.863%2c-413.633%2c-141.253%2c-430.035%2c-61.83C-446.974%2c20.194%2c-452.089%2c117.26%2c-399.498%2c182.445C-347.296%2c247.147%2c-242.935%2c225.142%2c-168.552%2c262.272C-105.641%2c293.675%2c-67.89%2c363.564%2c0%2c381.863' fill='%23d6e0f0'%3e%3c/path%3e%3cpath d='M1440 969.9159999999999C1529.839 978.387 1636.516 1031.19 1705.213 972.6800000000001 1776.145 912.2660000000001 1717.964 789.292 1753.2939999999999 703.077 1786.395 622.302 1894.991 580.694 1901.519 493.644 1908.15 405.212 1845.754 325.735 1786.541 259.721 1727.999 194.45499999999998 1654.843 137.589 1568.499 122.37400000000002 1485.754 107.793 1403.323 141.488 1328.11 178.93599999999998 1262.152 211.776 1212.3 265.271 1166.145 322.704 1121.526 378.226 1082.204 436.944 1065.184 506.11 1046.906 580.388 1041.481 658.38 1065.687 730.943 1091.4569999999999 808.1949999999999 1136.452 881.7 1205.093 925.5219999999999 1273.649 969.29 1359.023 962.28 1440 969.9159999999999' fill='white'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1158'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-size: cover;
  background-position: center;

  /* Estilo del scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  /* Estilo del thumb (la barra móvil) */
  ::-webkit-scrollbar-thumb {
    background-color: #666;
  }

  /* Estilo del thumb en hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: #999;
  }

  /* Estilo del track (la barra fija) */
  ::-webkit-scrollbar-track {
    background-color: white;
  }

  /* Estilo del track en hover */
  ::-webkit-scrollbar-track:hover {
    background-color: white;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`
