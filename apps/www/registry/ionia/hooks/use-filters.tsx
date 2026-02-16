import { getRouteApi, useNavigate } from "@tanstack/react-router"
import type { RegisteredRouter, RouteIds } from "@tanstack/react-router"

const cleanEmptyParams = <T extends Record<string, unknown>>(search: T) => {
  const newSearch = { ...search }
  Object.keys(newSearch).forEach((key) => {
    const value = newSearch[key]
    if (
      value === undefined ||
      value === "" ||
      (typeof value === "number" && isNaN(value))
    )
      delete newSearch[key]
  })

  return newSearch
}

export function useFilters<T extends RouteIds<RegisteredRouter["routeTree"]>>(routeId: T) {
  const routeApi = getRouteApi<T>(routeId)
  const navigate = useNavigate()
  const filters = routeApi.useSearch()

  const setFilters = (partialFilters: Partial<typeof filters>) =>
    navigate({
      to: ".",
      search: (prev: any) => cleanEmptyParams({ ...prev, ...partialFilters }),
      replace: true,
    })

  const resetFilters = (search?: any) =>
    navigate({ to: ".", search: search || {}, replace: true })

  return { filters, setFilters, resetFilters }
}
