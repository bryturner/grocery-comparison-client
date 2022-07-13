export const $storeTitles = ["Coop", "Migros"];

export const LIST_TYPE = {
  USER: "userList",
  STORE: "storeList",
};

export const ERROR_MSG = {
  ERR_LOCAL_STORAGE: "Local Storage Error: Could not access local storage",
  ERR_DB_CONNECT: "Error: Could not get data from database",
  ERR_FETCH_PROD:
    "Connection Error: Mock products being displayed are to test page functionality. Category selection is limited.",
};

export const STORE_INFO = {
  COOP: { storeTitle: "Coop", storeLink: "https://www.coop.ch/de/" },
  MIGROS: { storeTitle: "Migros", storeLink: "https://www.migros.ch/de" },
};
