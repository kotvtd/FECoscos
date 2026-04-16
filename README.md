# Exercise 1: Research "Cache Mode" của Label trong Cocos.
### "Cache Mode" của Label trong Cocos là gì ?
    Cache Mode của Label trong Cocos là cách mà Engine xử lý việc Render
    lại các text trong Scene. Nó quyết định là Scene sẽ vẽ text lại mỗi 
    Frame hay text sẽ được cache để sử dụng lại.


### Có mấy loại Cache Mode của Label trong Cocos ?
    Có 3 loaị cache mode chính của label trong Cocos: None Cache, 
    Bitmap và Char(Character Cache).
    
    - None Cache: 
        + Text sẽ được render liên tục mỗi frame.
        + Text sẽ không được Engine cache lại.
        + Thích hợp cho xử lí text thay đổi liên tục.
        + Hiệu năng giảm do vẽ lại quá nhiều(Draw Call tăng).

    - Bitmap Cache:
        + Text sẽ được render thành Texture và reuse lại như sprite.
        + Text không vẽ lại mỗi frame.
        + Hiệu năng tăng do Draw Call giảm mạnh.
        + Tốn bộ nhớ do tạo một bộ Texture riêng.
        + Không kinh hoạt với các font phức tạp và nhiều kí tự lạ.

    - Char(Character Cache):
        + Các ký tự riêng lẻ sẽ được Engine cache lại(render lên 1 texture).
        + Khi có Kí tự thay đổi, Engine sẽ lấy ký tự đã cache và vẽ ra. 
        + Tối ưu hơn None Cache và ít tốn bộ nhớ hơn Bitmap Cache.
        + Không kinh hoạt với các font phức tạp và nhiều kí tự lạ.
        


# Exercise 3: Life Cycle của Component trong Cocos
### Life Cycle của Component là gì ?
    Là cách mà Engine quyết định script của bạn chạy theo thứ tự nào 
    trong game loop.   

### Flow tổng thể của Life Cycle!
    1. onLoad:
        - Hàm được Cocos gọi ngay sau khi Component được tạo và Node đã
        được load xong.
        - Thường dùng để init hoặc setup reference.
        - Chạy trước khi scene Start.

    2. onEnable:
        - Hàm được Cocos gọi ngay khi Component được bật và Node
        đang active. Có thể gọi nhiều lần.
        - Xuất hiện khi: lần đầu Node xuất hiện, khi bật lại Component
        đã tắt, khi bật lại Node đã tắt.
        - Dùng đăng kí Event hoặc xử lí các trạng thái tạm thời.

    3. start:
        - Hàm được gọi một lần duy nhất ngay trước khi frame đầu tiên 
        của game chạy.
        - Chắc chắn các component khác đã được onLoad xong.
        - Thường dùng để lấy reference của các node khác trong scene.

    4. update(dt):
        - Gọi mỗi frame một lần.
        - dt (delta time) thời gian giữa 2 frame.
        - Thường dùng để xử lí logic có tính liên tục như di chuyển nhân vật,
        các logic đơn giản.

    5. lateUpdate(dt):
        - Được gọi sau khi tất cả update (tất cả update của các node trong 
        scene) đã được xử lí xong.
        - Được chạy mỗi frame một lần.
        - Thường dùng để xử lí UI và Camera và các Logic phụ thuộc.

    6. onDisable:
        - Được gọi nhiều lần khi Component tắt hoặc Node bị inactive.
        - Dùng để huỷ các Event khi Node không hoạt động, dừng các logic và
        animation, huỷ các timer,...
        => Tránh Memory leak, Event gọi nhiều lần khi bật tắt node, logic chaỵ dù
        node đã ẩn. 

    7. onDestroy:
        - Gọi 1 lần duy nhất trong vòng đời Component.
        - Gọi khi Node hoặc Component bị xoá khỏi scene.
        - Sẽ xuất hiện khi bạn xoá một node hoặc chuyển scene khác.
        - Dùng để cleanup end (dọn dẹp các logic hoặc sự kiện cuối cùng), debug
        Life Cycle,...
        - Sau onDestroy, Node sẽ không tồn tại, các Reference cũ có thể thành
        null hoặc invalid.
    


