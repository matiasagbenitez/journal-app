import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../../../src/store/auth";
import { MemoryRouter } from "react-router-dom";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

describe("Pruebas en el LoginPage", () => {
  test("debe de mostrarse correctamente", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getAllByText('Ingresar').length).toBeGreaterThanOrEqual(1);
  });
});
