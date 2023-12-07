import Image from "next/image";
import logo from "../app/logo.png";

export default function Home() {
  return (
    <div>
      {/* Header Section with Logo */}
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30px",
        }}
      >
        <Image src={logo} alt="Logo" width={500} height={75} />
      </header>

      {/* Rest of Your Page Content */}
      <main style={{}}>
        <h1>Arman/Andrew</h1>
        {/* Add your other content here */}
      </main>
    </div>
  );
}
