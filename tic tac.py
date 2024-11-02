import random

def print_board(board):
    for row in board:
        print(" | ".join(row))
        print("-" * 9)

def check_winner(board):
    for row in board:
        if row[0] == row[1] == row[2] != " ":
            return row[0]
    
    for col in range(3):
        if board[0][col] == board[1][col] == board[2][col] != " ":
            return board[0][col]
    
    if board[0][0] == board[1][1] == board[2][2] != " ":
        return board[0][0]
    
    if board[0][2] == board[1][1] == board[2][0] != " ":
        return board[0][2]
    
    return None

def is_board_full(board):
    for row in board:
        if " " in row:
            return False
    return True

def ai_move(board):
    empty_cells = [(r, c) for r in range(3) for c in range(3) if board[r][c] == " "]
    return random.choice(empty_cells)

def main():
    board = [[" " for _ in range(3)] for _ in range(3)]
    current_player = "X"  

    while True:
        print_board(board)

        if current_player == "X":
            row = int(input("Enter your move row (0, 1, 2): "))
            col = int(input("Enter your move column (0, 1, 2): "))
        else:
            row, col = ai_move(board)
            print(f"AI plays at ({row}, {col})")

        if board[row][col] == " ":
            board[row][col] = current_player
        else:
            print("Invalid move, try again.")
            continue

        winner = check_winner(board)
        if winner:
            print_board(board)
            print(f"{winner} wins!")
            break

        if is_board_full(board):
            print_board(board)
            print("It's a draw!")
            break
        current_player = "O" if current_player == "X" else "X"
main()
