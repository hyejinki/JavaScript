import heapq
INF = int(1e9)
# 입력
while True:
    N = int(input())
    if N == 0:
        break
    cave = [list(map(int, input().split())) for _ in range(N)]

    # 다익스트라 알고리즘을 이용한 최소 비용 경로 탐색
    distance = [[INF]*N for _ in range(N)]
    distance[0][0] = cave[0][0]
    heap = [(cave[0][0], 0, 0)]
    dx, dy = [1, -1, 0, 0], [0, 0, 1, -1]

    while heap:
        cost, x, y = heapq.heappop(heap)
        if distance[x][y] < cost:
            continue
        for i in range(4):
            nx, ny = x+dx[i], y+dy[i]
            if 0 <= nx < N and 0 <= ny < N:
                next_cost = cost + cave[nx][ny]
                if next_cost < distance[nx][ny]:
                    distance[nx][ny] = next_cost
                    heapq.heappush(heap, (next_cost, nx, ny))

# 출력
    print(distance[N-1][N-1])