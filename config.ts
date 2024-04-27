export const config = {
  wardName: "Sycamores Stake Young Men",
  apiUrl: "https://api.latterdayward.com/api",
  apiWard: "sycamores-ym-camp",
  apiHeaders: {
    headers: {
      "x-api-key": process.env.LDW_KEY,
      "Content-Type": "application/json",
    },
  },
  pages: {
    index: {
      heroCardId: "662d85cff50a146457c71757",
    },
  },
  httpHeaders: {
    "Cache-Control": "public, s-maxage=10, stale-while-revalidate=59",
  },
}