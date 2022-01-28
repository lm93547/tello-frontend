# Tello Front End

The front end viewer and commander for the Tello EDU drone which requires the Tello Node.JS backend [here](https://github.com/lm93547/tello-backend). To use this please first run:
`npm install`
Then once you have installed and started the backend, while connected to a drone run:
`npm run start`
This will spin up the local control and viewing window at [http://localhost:4000](http://localhost:4000)

#### Tech Stack
- React 17
- React Router
- [JSMpegPlayer](https://github.com/cycjimmy/jsmpeg-player)
- DJI Tello

Main screen controls and video screen:
![Screenshot 2022-01-21 at 20 56 25](https://user-images.githubusercontent.com/49888000/150599093-be5f2c9b-ddfa-4fe9-9a28-6560c5e2de62.png)

# Roadmap
- Flight planning (chaining commands)
- Swarm Control
- AI control
- New backend 🤣 golang probably
