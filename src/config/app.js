
//FireBase
exports.firebaseConfig = {
	apiKey: "AIzaSyDEGSHmQ7m1TyIzuZtjXK3k1ClHO5fTWkg",
    authDomain: "togotap.firebaseapp.com",
    databaseURL: "https://togotap.firebaseio.com",
    projectId: "togotap",
    storageBucket: "togotap.appspot.com",
    messagingSenderId: "430104805788"
};


//App setup
exports.adminConfig={
  "appName": "Admin Panel",
  "slogan":"Shakalaka Boomba",

  "design":{
    "sidebarBg":"sidebar-1.jpg", //sidebar-1, sidebar-2, sidebar-3
    "dataActiveColor":"purple", //"purple | blue | green | orange | red | rose"
    "dataBackgroundColor":"black", // "white | black"
  },

  "codeversion": "1.0",
  "allowedUsers":["admin@admin.com"], //If null, allow all users, else it should be array of allowd users
  "fieldBoxName": "Fields",
  "maxNumberOfTableHeaders":5,
  "prefixForJoin":["-event"],
  "methodOfInsertingNewObjects":"timestamp", //timestamp (key+time) | push - use firebase keys
  "urlSeparator":"+",


  "fieldsTypes":{
    "photo":["photo","image"],
    "dateTime":["datetime","start"],
    "date":["date","created"],
    "time":["time"],
    "maps":["map","latlng"],
    "textarea":["description"],
    "html":["content"],
    "radio":["radio","room_status"],
    "checkbox":["checkbox","anemity"],
    "dropdowns":["status","dropdowns","room_area","room_category","room_persons","room_bed"],
  },
  "optionsForSelect":[
      {"key":"dropdowns","options":["new","processing","rejected","completed"]},
      {"key":"anemity","options":["Flat Screen TV with Cable", "Free Wi-Fi", "Outlet Adapters"]},
      {"key":"status","options":["just_created","confirmed","canceled"]},
      {"key":"radio","options":["no","maybe","yes"]},
	  {"key":"room_status","options":["unpublished","published"]},
	  {"key":"room_persons","options":["0","1","2","3","4","5","7"]},
	  {"key":"room_area","options":["UnSelected","224x2224ft","334x334ft","500x500ft"]},
	  {"key":"room_category","options":["UnSelected","Deluxe Room","Family","The Room"]},
	  {"key":"room_bed","options":["UnSelected","1 Single size bed","2 Single size bed","1 Double size bed","1 Double size bed and 1 Single size bed","2 Double size bed","5 Single size bed"]}
  ],

  "paging":{
    "pageSize": 20,
    "finite": true,
    "retainLastPage": false
  }
}

//Navigation
exports.navigation=[
    {
      "link": "/",
      "name": "Dashboard",
      "schema":null,
      "icon":"home",
      isIndex:true,
      "path": "",
    },
	{
		  "link": "fireadmin",
		  "path": "rooms/items",
		  "name": "Rooms",
		  "icon":"add box",
		  "tableFields":["room_number","floor_number","room_status"],
	},
	{
		  "link": "fireadmin",
		  "path": "dummy/items",
		  "name": "Dummy",
		  "icon":"location_city",
		  "tableFields":["name","description"],
	}
  ];

exports.userDetails={

}
