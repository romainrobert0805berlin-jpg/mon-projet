import { BrowserRouter, Routes, Route } from "react-router-dom"
import { I18nProvider } from "@/i18n/I18nProvider"
import { CartProvider } from "@/store/cart"
import { Layout } from "@/components/Layout"
import { HomeScreen } from "@/screens/HomeScreen"
import { MenuScreen } from "@/screens/MenuScreen"
import { ProductScreen } from "@/screens/ProductScreen"
import { CartScreen } from "@/screens/CartScreen"
import { AccountScreen } from "@/screens/AccountScreen"
import { StoryScreen } from "@/screens/StoryScreen"
import { AddressesScreen } from "@/screens/AddressesScreen"
import { CareersScreen } from "@/screens/CareersScreen"
import { ContactScreen } from "@/screens/ContactScreen"
import { FaqScreen } from "@/screens/FaqScreen"
import { B2BScreen } from "@/screens/B2BScreen"
import { LoyaltyScreen } from "@/screens/LoyaltyScreen"

export default function App() {
  return (
    <I18nProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/menu" element={<MenuScreen />} />
              <Route path="/menu/:id" element={<ProductScreen />} />
              <Route path="/panier" element={<CartScreen />} />
              <Route path="/compte" element={<AccountScreen />} />
              <Route path="/histoire" element={<StoryScreen />} />
              <Route path="/adresses" element={<AddressesScreen />} />
              <Route path="/carrieres" element={<CareersScreen />} />
              <Route path="/contact" element={<ContactScreen />} />
              <Route path="/faq" element={<FaqScreen />} />
              <Route path="/b2b" element={<B2BScreen />} />
              <Route path="/fidelite" element={<LoyaltyScreen />} />
              <Route path="*" element={<HomeScreen />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </I18nProvider>
  )
}
