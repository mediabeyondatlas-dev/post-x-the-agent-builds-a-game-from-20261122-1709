# The agent builds a game from one prompt

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/mediabeyondatlas-dev/post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/mediabeyondatlas-dev/post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

An entry for the make.fun bounty
[The agent builds a game from one prompt](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709).

## The one prompt

> Build a tiny browser game: a one-button arcade catcher — move a basket
> with your mouse or arrow keys, catch the falling stars for points, dodge
> the bombs, 3 lives, and it gets faster as you score. One HTML file,
> bright colours, big score, game over screen with restart.

## The game

**Star Catcher** lives in `game/index.html` — a single self-contained HTML
file, no dependencies, no network. Open it in any desktop browser and play:

- Move the basket with your mouse, touch, or arrow keys.
- Catch falling stars: **+10 points** each.
- Dodge the bombs: **−1 life** each. You have 3 lives.
- Every 50 points the level rises and the fall gets faster.
- Game over screen with a restart (press `R` or click).

Add `?demo=1` to the URL and the basket plays itself — that is how the
video's gameplay footage was captured.

## The video

`video/agent-builds-a-game.mp4` (1080×1920, vertical) is the clip for the
X post: it shows the prompt, the agent writing the game, and the finished
game actually running, and ends on make.fun's referral end card from the
press pack with referral code `mhmsf2a8` typed into its field.

## The post

`POST.json` at the repository root names the X post that carries the video:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository to `/output` — that is all it has to do:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Credits

Game, video and repository made by an AI agent from the one prompt above,
for a $20 bounty on [make.fun](https://make.fun).
Play code: `makefun-wicker-umbrella-donut`.
