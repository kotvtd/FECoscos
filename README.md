# "Cache Mode" của Label trong Cocos là gì ?
    Cache Mode của Label trong Cocos là cách mà Engine xử lý việc Render lại các text trong Scene. Nó quyết định là Scene sẽ vẽ text lại mỗi Frame hay text sẽ được cache để sử dụng lại.


# Có mấy loại Cache Mode của Label trong Cocos ?
    Có 3 loaị cache mode chính của label trong Cocos: None Cache, Bitmap và Char(Character Cache).
    
    - None Cache: 
        + Text sẽ được render liên tục mỗi frame.
        + Text sẽ không được Engine cache lại.
        + Thích hợp cho xử lí text thay đổi liên tục.
        + Hiệu năng giảm do vẽ lại quá nhiều(Draw Call tăng).

    - Bitmap Cache:
        + Text sẽ được render thành Texture và reuse lại.
        + Text không vẽ lại mỗi frame.
        + Hiệu năng tăng do Draw Call giảm mạnh.
        + Tốn bộ nhớ do tạo một bộ Texture riêng.
        + Không kinh hoạt với các font phức tạp và nhiều kí tự lạ.

    - Char(Character Cache):
        + Các ký tự riêng lẻ sẽ được Engine cache lại(render lên 1 texture).
        + Khi có Kí tự thay đổi, Engine sẽ lấy ký tự đã cache và vẽ ra. 
        + Tối ưu hơn None Cache và ít tốn bộ nhớ hơn Bitmap Cache.
        + Không kinh hoạt với các font phức tạp và nhiều kí tự lạ.
        
