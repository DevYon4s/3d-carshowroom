import { useGLTF, Html } from "@react-three/drei";
import "../index.css";

const cars = [
  {
    name: "80s Car",
    price: "30K",
    position: [0, 0, 0],
    file: "80s_Car.glb",
    scale: 8,
    details_position: [0, 5, 0],
  },
  {
    name: "Blue Car",
    price: "50K",
    position: [10, 0, 0],
    file: "blue_car.glb",
    scale: 0.8,
    details_position: [10, 6, 0],
  },
  {
    name: "Banana Car",
    position: [20, 1, 0],
    price: "150K",
    file: "banana_car.glb",
    scale: 0.01,
    rotate: [0, Math.PI / 1, 0],
    details_position: [20, 6, 0],
  },

  {
    name: "Police Car",
    position: [30, 0, 0],
    price: "90K",
    file: "police.glb",
    scale: 3,
    rotate: [0, Math.PI / 1, 0],
    details_position: [30, 6, 0],
  },
  {
    name: "Round Rover",
    price: "1.5M",
    position: [32, 0, 0],
    file: "rr.glb",
    details_position: [40, 7, 0],
  },
  {
    name: " Aventador",
    position: [50, 0, 0],
    price: "600K",
    file: "yellow_lambo.glb",
    scale: 0.02,
    rotate: [0, Math.PI / 1, 0],
    details_position: [50, 5, 0],
  },
  {
    name: "Suv",
    position: [60, 0, 0],
    price: "40K",
    file: "white_suv.glb",
    scale: 1.5,
    rotate: [0, Math.PI / 1, 0],
    details_position: [60, 5, 0],
  },
];

function Car({ file, position, scale, rotate, name, price, details_position }) {
  const { scene } = useGLTF(`/models/${file}`);
  return (
    <group>
      <primitive
        object={scene}
        position={position}
        scale={scale}
        rotation={rotate}
      />
      {/* Car label and price */}
      <Html
        position={
          details_position
            ? details_position
            : [
                position[0],
                position[1] + (scale ? 2.5 * scale : 2.5),
                position[2],
              ]
        }
        center
      >
        <div className="car-card no-select">
          <div className="car-name">{name}</div>
          <div className="car-price">${price}</div>
        </div>
      </Html>
    </group>
  );
}

export { Cars };
function Cars() {
  return (
    <group>
      {cars.map((car) => (
        <Car
          key={car.name}
          file={car.file}
          position={car.position}
          scale={car.scale}
          rotate={car.rotate}
          name={car.name}
          price={car.price}
          details_position={car.details_position}
        />
      ))}
    </group>
  );
}
