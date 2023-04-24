import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex justify-center dark:bg-gray-700 bg-amber-100 lg:text-lg p-4">
      <NavbarItem title="Destaque" param="fetchTrending" />
      <NavbarItem title="Mais Votado" param="fetchTopRated" />
    </div>
  );
}
