import asyncio
import websockets

#CLIENT
async def message():
    async with websockets.connect("ws://localhost:1234") as socket:
        await socket.send("asdasdas")
        print(await socket.recv())

asyncio.get_event_loop().run_until_complete(message()) 
