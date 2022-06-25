var APP_DATA = {
  "scenes": [
    {
      "id": "0-hallway",
      "name": "Hallway",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.24861408134874452,
          "pitch": 0.025427971556936768,
          "rotation": 5.497787143782138,
          "target": "1-bathroom"
        },
        {
          "yaw": -0.07648509033698048,
          "pitch": 0.17520386146098943,
          "rotation": 0,
          "target": "2-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bathroom",
      "name": "Bathroom",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1092558988213694,
          "pitch": 0.5665434346544664,
          "rotation": 0,
          "target": "3-bedroom"
        },
        {
          "yaw": -2.777824702068786,
          "pitch": 0.1863534101108133,
          "rotation": 1.5707963267948966,
          "target": "0-hallway"
        },
        {
          "yaw": 2.6394456010680125,
          "pitch": 0.3274639798021113,
          "rotation": 5.497787143782138,
          "target": "2-bedroom-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.5390932131672113,
          "pitch": 0.03350093514382024,
          "title": "Mirror",
          "text": "Don't look here&nbsp;"
        }
      ]
    },
    {
      "id": "2-bedroom-2",
      "name": "Bedroom 2",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -2.8939905801790857,
        "pitch": 0.16701144391434752,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0169056438249147,
          "pitch": 0.18668039678415482,
          "rotation": 4.71238898038469,
          "target": "3-bedroom"
        },
        {
          "yaw": -2.8968639327554584,
          "pitch": 0.3308187542615766,
          "rotation": 0,
          "target": "0-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bedroom",
      "name": "Bedroom",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6300602873407275,
          "pitch": 0.07024190782975737,
          "rotation": 0,
          "target": "1-bathroom"
        },
        {
          "yaw": -2.7790566456001713,
          "pitch": 0.4889706569176031,
          "rotation": 4.71238898038469,
          "target": "0-hallway"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
