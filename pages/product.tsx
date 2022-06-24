import Products from "../components/Products";
import LoggedOut from "../layouts/LoggedOut";

export default function Product() {
  return (
    <LoggedOut>
      <Products />
    </LoggedOut>
  );
}
