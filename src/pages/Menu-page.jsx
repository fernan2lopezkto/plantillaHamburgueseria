import MyAppBar from "../components/MyAppBar";
import ProductTable from "../components/ProductTable";


function MenuPage() {
  return (
    <div
    id="error-page"
      style={{
        minHeight: "100vh",
      }}>
    <MyAppBar />
    <ProductTable />
    </div>
  )
}
export default MenuPage;