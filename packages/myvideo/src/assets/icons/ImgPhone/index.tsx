import {widthLize} from 'pmn-rn-component';
import React from 'react';
import {
  Svg,
  G,
  Path,
  Circle,
  Mask,
  Defs,
  LinearGradient,
  ClipPath,
  Stop,
  Rect,
} from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
  color?: string;
};

const ImgPhone = ({width = 146, height = 146, color = '#272728'}: Props) => {
  return (
    <Svg
      width={widthLize(width)}
      height={widthLize(height)}
      viewBox="0 0 146 146"
      fill="none">
      <G clip-path="url(#clip0_1966_79433)">
        <Path
          d="M115.952 19.0011C119.13 22.2033 120.915 26.5463 120.915 31.0749L120.914 192.925C120.914 197.454 119.129 201.797 115.951 204.999C112.774 208.201 108.464 210 103.97 210H41.9441C39.7189 210 37.5156 209.558 35.4598 208.7C33.4041 207.842 31.5362 206.584 29.9628 204.999C28.3894 203.413 27.1413 201.531 26.2898 199.459C25.4383 197.388 25 195.167 25 192.925V31.0746C25 28.8323 25.4383 26.612 26.2899 24.5404C27.1414 22.4687 28.3896 20.5864 29.963 19.0009C31.5364 17.4154 33.4043 16.1577 35.4601 15.2996C37.5159 14.4416 39.7192 14 41.9443 14H103.971C108.465 14 112.774 15.799 115.952 19.0011Z"
          stroke="#B0B0B8"
        />
        <Path
          d="M115.927 31.7864V193.873C115.927 197.264 114.595 200.515 112.225 202.913C109.854 205.311 106.639 206.658 103.287 206.66H41.002C37.6481 206.66 34.4314 205.313 32.0593 202.915C29.6872 200.517 28.354 197.265 28.353 193.873V31.7864C28.354 28.3946 29.6871 25.1421 32.0591 22.7442C34.4311 20.3464 37.6477 18.9996 41.0015 19H48.557C48.186 19.9227 48.0448 20.9234 48.1458 21.9141C48.2468 22.9049 48.5868 23.8555 49.1361 24.6822C49.6854 25.5089 50.4271 26.1865 51.296 26.6555C52.1649 27.1244 53.1344 27.3703 54.1193 27.3716H89.6289C90.6138 27.3703 91.5833 27.1244 92.4521 26.6555C93.321 26.1865 94.0627 25.5089 94.612 24.6822C95.1613 23.8555 95.5014 22.9049 95.6024 21.9141C95.7034 20.9234 95.5622 19.9227 95.1912 19H103.284C106.637 19.0006 109.852 20.3476 112.223 22.7448C114.594 25.1421 115.926 28.3934 115.927 31.7839V31.7864Z"
          fill="url(#paint0_linear_1966_79433)"
          fill-opacity="0.12"
        />
        <Circle cx="73.353" cy="79" r="21" fill={color} />
        <Mask
          id="mask0_1966_79433"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="52"
          y="58"
          width="43"
          height="42">
          <Circle cx="73.353" cy="79" r="21" fill={color} />
        </Mask>
        <G mask="url(#mask0_1966_79433)">
          <Path
            d="M73.353 70.0005C69.2175 70.0005 65.865 73.353 65.865 77.4885C65.865 81.624 69.2175 84.9765 73.353 84.9765C77.4885 84.9765 80.841 81.624 80.841 77.4885C80.841 73.353 77.4885 70.0005 73.353 70.0005Z"
            fill="#B0B0B8"
          />
          <Path
            d="M73.5 74.0005C70.4624 74.0005 68 76.4629 68 79.5005C68 82.5381 70.4624 85.0005 73.5 85.0005C76.5376 85.0005 79 82.5381 79 79.5005C79 76.4629 76.5376 74.0005 73.5 74.0005Z"
            fill="#8A8B93"
          />
          <Path
            d="M67.2517 87.52C65.2289 87.52 63.2891 88.3418 61.8588 89.8046C60.4285 91.2674 59.625 93.2513 59.625 95.32V98.44C59.625 99.3016 60.3079 100 61.1503 100H85.5556C86.398 100 87.081 99.3016 87.081 98.44V95.32C87.081 93.2513 86.2774 91.2674 84.8472 89.8046C83.4169 88.3418 81.477 87.52 79.4543 87.52H67.2517Z"
            fill="#717278"
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1966_79433"
          x1="72.1403"
          y1="25.5"
          x2="72.1403"
          y2="153"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="white" />
          <Stop offset="1" stop-color="white" stop-opacity="0" />
        </LinearGradient>
        <ClipPath id="clip0_1966_79433">
          <Rect
            width={widthLize(width)}
            height={widthLize(width)}
            fill="white"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ImgPhone;
