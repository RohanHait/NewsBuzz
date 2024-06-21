import React, { useState } from "react";
import { Popover, PopoverPanel, PopoverButton } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setResponseData } from "../storeConfig";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [exactPhase, setExactPhase] = useState("");
  const [hasWord, setHasWord] = useState("");
  const [excludeWord, setExcludeWord] = useState("");
  const dispatch = useDispatch();
  const api = useSelector((state) => state.api);
  const createQuery = () => {
    let query = "";
    if (hasWord) {
      let hWord = hasWord.match(/\w*\b/g).filter((e) => e.length).join(" AND ") ;

      query += `${hWord}`;
    }
    if (exactPhase) {
      query += ` AND "${exactPhase}"`;
    }
    if (excludeWord) {
      let exWord = excludeWord.match(/\w*\b/g).filter((e) => e.length).join(" AND ") ;
      query += `NOT (${exWord})`;
    }
    console.log("Query : ", query);
    setSearchQuery(query.replaceAll("AND", "").replaceAll("NOT", "-"));
    return query;
  };
  const reverseQuery = () => {
    let query = searchQuery;
    let exactPhase = "";
    let hasWord = "";
    let excludeWord = "";
    console.log("Try to reverse query", query);
    if (query.includes(`"`)) {
      exactPhase = query.match(/"(.*?)"/)[1];
      query = query.replace(`"${exactPhase}"`, "");
      console.log("Exact Phase : ", exactPhase, "Query : ", query);
    }
    if (query.includes("-")) {
      excludeWord = query.match(/-(\w*)/g).join(" ");
      query = query.replaceAll(/-\w*/g, "");
      console.log("Exclude Word : ", excludeWord, "Query : ", query);
    }
    if (query.length > 0) {
      hasWord = query.match(/(\w*)/g).join(" ");
      query = query.replaceAll(/\w*/g, "");
      console.log("Has Word : ", hasWord, "Query : ", query);
    }
    setExactPhase(exactPhase);
    setHasWord(hasWord);
    setExcludeWord(excludeWord);
    let hWord = hasWord.length
      ? hasWord
          .match(/\w*\b/g)
          .filter((e) => e.length)
          .join(" AND ")
      : "";
    let exWord = excludeWord.length
      ? excludeWord
          .trim()
          .match(/\w*\b/g)
          .filter((e) => e.length)
          .join(" AND ")
      : "";
    if (hWord.length === 0 && exWord.length === 0 && exactPhase.length === 0)
      return;
    query = "";
    if (hWord.length) query += `${hWord}`;
    if (exactPhase.length) query += `AND "${exactPhase}"`;
    if (exWord.length) query += ` NOT (${exWord})`;
    console.log("Query : ", query);
    return query;
  };

  const handelNormalSearch = async () => {
    let query = reverseQuery();
    if (query === undefined || query === "") return;
    console.log("Query : ", query);
    searchApi(query);
    setExactPhase("");
    setHasWord("");
    setExcludeWord("");
    setSearchQuery("");
  };
  const handelAdvSearch = async () => {
    let query = createQuery();
    if (query === undefined || query === "") return;
    console.log("Query : ", query);
    searchApi(query);
    setExactPhase("");
    setHasWord("");
    setExcludeWord("");
  };
  const searchApi = async (query)=>{
    dispatch(setLoading(true));
    api.setQuery(query);
    api
      .getNews()
      .then((data) => {
        dispatch(setLoading(false));
        console.log(data);
        dispatch(setResponseData(data));
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className=" h-full w-full rounded-xl flex items-center navbar-search-color ">
      <div className="mx-4 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>

      <input
        className="w-full h-full bg-inherit focus:outline-none"
        type="text"
        placeholder="Search"
        value={searchQuery}
        onFocus={() => setSearchQuery("")}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={async (e) => {
          if (e.key === "Enter") {
            handelNormalSearch();
          }
        }}
      />
      <div className="mr-4 ml-2 ">
        <Popover className={"relative z-auto"}>
          <PopoverButton className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </PopoverButton>
          <PopoverPanel
            anchor={{ to: "bottom end", gap: 18, offset: 14 }}
            className="navbar-color border border-gray-300 rounded-md dark:border-slate-700 w-[70%] relative z-30 "
          >
            <div className="flex flex-col space-y-2 p-2 w-full">
              <section>
                <header className="text-sx font-semibold ">
                  Advance Searching{" "}
                </header>
                <div className="flex items-center justify-between ">
                  <label className=" popup-input-label ">Exact Phase :</label>
                  <input type="text" className=" popup-input-text" value={exactPhase} onChange={(e)=>{setExactPhase(e.target.value)}} />
                </div>
                <div className="flex items-center justify-between ">
                  <label className=" popup-input-label ">Has Word :</label>
                  <input type="text" className=" popup-input-text" value={hasWord} onChange={(e)=>{setHasWord(e.target.value)}} />
                </div>
                <div className="flex items-center justify-between ">
                  <label className=" popup-input-label ">Exclude Word :</label>
                  <input type="text" className=" popup-input-text" value={excludeWord} onChange={(e)=>{setExcludeWord(e.target.value)}} />
                </div>
              </section>
              <div className="flex justify-end">
                <button className=" btn btn-secondary" onClick={()=>{setExactPhase("") ; setExcludeWord(""); setHasWord("") ;}}> Clear </button>
                <button className=" btn btn-primary" onClick={handelAdvSearch}> Search </button>
              </div>
            </div>
          </PopoverPanel>
        </Popover>
      </div>
    </div>
  );
}

export default SearchBar;
