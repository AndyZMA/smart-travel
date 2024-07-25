from PIL import Image

def get_gif_duration(gif_path):
    with Image.open(gif_path) as img:
        duration = 0
        for frame in range(0, img.n_frames):
            img.seek(frame)
            duration += img.info['duration']
        return duration

gif_path = './assets/loader/loader.gif'
duration_ms = get_gif_duration(gif_path)
duration_seconds = duration_ms / 1000.0
print(f'Duración del GIF: {duration_seconds} segundos')
