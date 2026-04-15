# Hệ trục toạ độ trong Cocos là gì ?

## - Hệ trục toạ độ là cách Cocos xác định vị trí của mọi object trong không gian game. 
- 1. Hệ trục toạ độ cơ bản: Cocos dùng hệ trục x,y (chiều rộng và chiều cao cho 2D) và x,y,z (thêm chiều sâu) cho IOS. Mỗi đơn vị của toạ độ tương đương với 1 pixel ( vd: A có toạ độ (100,10) lệch so với cha của nó sang phải 100 và lệch cao 10).

- 2. Hệ trục toạ độ của Cocos gồm 2 loại: 
    - Toạ độ cục bộ (Local Position) lấy toạ độ so với node cha : Tức là một node cha có toạ độ (0,0) và node con có toạ 
    độ(10,5) thì node con đó lệch phải 10 pixel và lệch trệ 5 pixel so với node cha.
    - Toạ độ thế giới (World Position) là toạ độ được cộng dồn toạ độ của node cần xác định với tất cả node cha của nó. Tức là như node B có toạ độ(100,0) và node B là con của node A có toạ độ (50,20), thì node B có toạ độ thế giới là (150, 20).

- 3. Anchor Point (Điểm neo):
    - Là điểm mà các node con neo vào node cha nó theo đơn vị 0->1.
    - Điểm neo x thì 0 là rìa bên trái và 1 là rìa bên phải, điểm neo y thì 0 là rìa phía dưới và 1 là rìa phía trên (node A có điểm neo (0,0) thì vị trí neo của nó so với node cha là góc trái bên dưới của nó sẽ neo vào cha, (0.5,0.5) là điểm neo sẽ nằm chính giữa, (1,1) là góc trên phải nó). Dùng để căn chỉnh UI dễ dàng và cố định vị trí của node không bị lệch khi scale hay Resolution.

# Thế nào là hệ trục toạ độ thế giới ?
## - Hệ trục toạ độ thế giới là: hệ toạ độ gốc của toàn bộ scene, dùng để xác định chính xác vị trí thật của các Object trên màn hình. Nó xác định các Object bằng cách biến đổi node từ local space lên world space.
-   1. Lấy local position của node.
-   2. Áp dụng scale + rotation của parent
-   3. Cộng dồn position qua từng cấp parent. => Toạ độ world space.

### - Gốc toạ độ thế giới nằm ở đâu ?
-   Gốc(0,0,0) nằm tại scene Root (node gốc của scene): tất cả các vị trí của node đều tính toán vị trí cuối cùng từ gốc này.

### - Hướng của các trục của gốc:
-   X: sang phải thì tăng giá trị x, sang trái thì giảm. VD: A(1,0) sang phải 1 pixel, A(-1,0) sang trái 1 pixel.
-   Y: lên trên thì tăng giá trị y và xuống dưới thì giảm.
-   Z(3D): ra phía trước thì tăng lên và ra phía sau thì giảm xuống.

### - Ý nghĩa của hệ trục toạ độ thế giới:
-   Nó đưa vị trí của tất cả các Object về một khung tham chiếu chung :    
    -   Xác định khoảng cách tuyệt đối của các Object.
    -   Kiểm tra các va chạm trong game.
    -   Render: nhờ world space Engine mới có thể nhận biết xem Object có nằm trong vùng của Camera bắt hay không từ đó vẽ ra Object đó lên màn hình.