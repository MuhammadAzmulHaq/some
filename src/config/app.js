
//FireBase
exports.firebaseConfig = {
	apiKey: "AIzaSyA317ZRudtMjB9zqfkLmahwo6OeAIML-dM",
    authDomain: "taptogo-61889.firebaseapp.com",
    databaseURL: "https://taptogo-61889.firebaseio.com",
    projectId: "taptogo-61889",
    storageBucket: "taptogo-61889.appspot.com",
    messagingSenderId: "953283629516"
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
  "prefixForJoin":["-event","-room","-hall","-item","-emp","-"],
  "methodOfInsertingNewObjects":"timestamp", //timestamp "("key+time) | push - use firebase keys
  "urlSeparator":"+",

	
  "fieldsTypes":{
    "photo":["photo","image"],
    "dateTime":["datetime","start","event_Date_Time"],
    "date":["date","created"],
    "time":["time"],
    "maps":["map","latlng"],
    "textarea":["description"],
    "html":["content","event_Detail"],
    "radio":["radio","pub_status"],
    "checkbox":["checkbox","anemity"],
    "dropdowns":["status","dropdowns","room_area","room_category","room_persons","room_bed","emp_post","order_status"],
  },
  "optionsForSelect":[
      {"key":"dropdowns","options":["new","processing","rejected","completed"]},
      {"key":"anemity","options":["Flat Screen TV with Cable", "Free Wi-Fi", "Outlet Adapters"]},
      {"key":"status","options":["just_created","confirmed","canceled"]},
      {"key":"radio","options":["no","maybe","yes"]},
	  {"key":"pub_status","options":["unpublished","published"]},
	  {"key":"room_persons","options":["0","1","2","3","4","5","7"]},
	  {"key":"room_area","options":["UnSelected","224x2224ft","334x334ft","500x500ft"]},
	  {"key":"room_category","options":["UnSelected","Deluxe Room","Luxury Room","VIP Room","Family Room"]},
	  {"key":"emp_post","options":["UnSelected","Manager","Worker","Cook","Chef","Engineer","IT"]},
	  {"key":"order_status","options":["Pending","Ready","Served"]},
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
		  "path": "reservations",
		  "name": "Reservations",
		  "icon":"featured_play_list",
		  "tableFields":["rID","bill"],
	},
	{
		  "link": "fireadmin",
		  "path": "orders/items",
		  "name": "Orders",
		  "icon":"featured_play_list",
		  "tableFields":["datetime","order_status","total"],
	},
	{
		  "link": "fireadmin",
		  "path": "events/items",
		  "name": "Events",
		  "icon":"event",
		  "tableFields":["image","event_number","event_Date_Time","pub_status"],
	},
	{
		  "link": "fireadmin",
		  "path": "services/items",
		  "name": "Services",
		  "icon":"local_laundry_service",
		  "tableFields":["name","cost_in_Rps","pub_status"],
	},
	{
		  "link": "fireadmin",
		  "path": "fooditems/items",
		  "name": "Food Menu",
		  "icon":"room_service",
		  "tableFields":["image","name","cost_in_Rps","pub_status"],
	},
	{
		  "link": "fireadmin",
		  "path": "employees/items",
		  "name": "Employees",
		  "icon":"person_pin",
		  "tableFields":["image","name","emp_post"],
	}
  ];

exports.userDetails={

}
