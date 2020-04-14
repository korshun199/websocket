import asyncio
import websockets
 
async def response(websocket, path):
	message = await websocket.recv()
	print(f"We got the message from the client: {message}")
	await websocket.send("WORK")

start_server = websockets.serve(response, 'localhost', 1234)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
#CLIENT
#async def message():
#    async with websockets.connect("ws://localhost:1235") as socket:
#        await socket.send("asdasdas")
#        print(await socket.recv())

#asyncio.get_event_loop().run_until_complete(message()) 
