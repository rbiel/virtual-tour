var APP_DATA = {
  "scenes": [
    {
      "id": "0-schlafzimmer",
      "name": "Schlafzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.25246345476681853,
        "pitch": 0.4391062700086934,
        "fov": 1.5500758023790915
      },
      "linkHotspots": [
        {
          "yaw": 2.9816941254707245,
          "pitch": 0.7197391376478315,
          "rotation": 0.7853981633974483,
          "target": "2-wohnzimmer"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5134970928925888,
          "pitch": -0.15079724315131315,
          "title": "IkeaBuidl",
          "text": "ikea.com"
        }
      ]
    },
    {
      "id": "1-eingang",
      "name": "Eingang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.7952508394029429,
        "pitch": -0.0030706732168432893,
        "fov": 1.5500758023790915
      },
      "linkHotspots": [
        {
          "yaw": -1.260574705531674,
          "pitch": 0.6155096743777015,
          "rotation": 0.7853981633974483,
          "target": "2-wohnzimmer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-wohnzimmer",
      "name": "Wohnzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.1541693598414398,
        "pitch": 0.29478462881703393,
        "fov": 1.5500758023790915
      },
      "linkHotspots": [
        {
          "yaw": -0.5370613360536858,
          "pitch": 0.5654360334489752,
          "rotation": 5.497787143782138,
          "target": "1-eingang"
        },
        {
          "yaw": -1.9827162812877823,
          "pitch": 0.7617557122129206,
          "rotation": 0,
          "target": "0-schlafzimmer"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
