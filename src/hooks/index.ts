import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { atom, useRecoilValue, selector, useRecoilState } from "recoil";

const queryState = atom({
  key: "query",
  default: "",
});

const resultsState = selector({
  key: "searchResults",
  get: async ({ get }) => {
    const valorDeQuery = get(queryState);
    const response = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?q=" + valorDeQuery
    );
    const data = await response.json();

    // hago la búsqueda usando la API de mercadolibre
    return data.results;
  },
});

// mi custom hook
export function useSearchResults(): any[] {
  const params = useParams();
  const [query, setQuery] = useRecoilState(queryState);

  // escucho cambios en los params con useEffect
  useEffect(() => {
    if (params.query) {
      setQuery(params.query);
    }
  }, [params]);

  // finalmente me engancho a los cambios de resultState
  const results = useRecoilValue(resultsState);

  return results;
}
