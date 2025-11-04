import type { APIRoute } from 'astro'
import type { DayFeed, Channel, RequestInit, DayProps } from "../../components/types";
import { dateAsString } from "../../utilities/dates";

export const GET: APIRoute = async (Astro) => {
  const API_PASSWORD = import.meta.env.API_PASSWORD;
  const { scheduleDate } = Astro.props as DayProps;
  var feeds: Array<Channel> = [];
  var formattedDate: String = "";
  var displayDate: String = "";
  var previousDate: String = "";
  var nextDate: String = "";
  var dateObj;

  const myHeaders = new Headers();
  myHeaders.append("X-PBSAUTH", API_PASSWORD);

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  if (scheduleDate) {
    const year = parseInt(scheduleDate.substring(0, 4));
    const month = parseInt(scheduleDate.substring(4, 6)) - 1; // Subtract 1 for zero-indexed month
    const day = parseInt(scheduleDate.substring(6, 8));

    dateObj = new Date(year, month, day);
    // The extra space after the date fixes string-to-date conversions: https://stackoverflow.com/a/34821566
    //dateObj = new Date(scheduleDate);
  } else {
    // default to today
    dateObj = new Date();
  }

  formattedDate = dateAsString(dateObj);
  previousDate = dateAsString(dateObj, -1);
  nextDate = dateAsString(dateObj, 1);

  const displayFormatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  displayDate = displayFormatter.format(dateObj);

  const response = await fetch(
    `https://tvss.services.pbs.org/tvss/wttw/day/${formattedDate}/?fetch-images`,
    requestOptions
  );

  if (!response.ok) {
    // Handle HTTP error statuses (e.g., 404, 500)
    const errorData = await response.text();
    throw new Error(
      `HTTP error! Status: ${response.status}, Message: ${errorData}`
    );
  }

  const data: DayFeed = await response.json();
  if (data.feeds) {
    // Filter and sort the feeds
    feeds = data.feeds.filter(
      (feed) => feed.digital_channel !== "" && feed.digital_channel !== "11.5"
    );
    feeds = feeds.sort(
      (a, b) => Number(a.digital_channel) - Number(b.digital_channel)
    );
  }

   return new Response(
    JSON.stringify({
      feeds: feeds,
      dateObj: dateObj
    }),
  )
}