Research a small to Auto Atlas !!!

# Atlas là:
    - 1 tấm ảnh lớn chứa nhiều sprites ảnh nhỏ thay vì nhiều tấm ảnh nhỏ riêng biệt.
    - Tài nguyên Atlas bao gồm một ảnh PNG và một file chỉ mục. File chỉ mục giúp các công cụ
    sử dụng Atlas tìm được chính xác vị trí và kích thước của từng sprite ảnh nhỏ trong tấm ảnh lớn.
    - Kích thước tối đa của ảnh Atlas: phụ thuộc vào giới hạn của GPU và các Engine sử dụng nó.
    Tiêu chuẩn của ảnh Atlas thường là 1024 x 1024 hoặc 2048 2048. Nhưng kích thướng ảnh tối đa
    mà các thiết bị hiện đại có thể hỗ trợ là 16384 x 16384.

# Ưu điểm của dùng Atlas: 
    - Giảm Draw calls -> giảm mức tiêu thụ GPU -> tối ưu hoá hiệu năng trò chơi.
    - Khi kết hợp, các khoảng trống của sprite được lấp đầy giúp tối ưu bộ nhớ.
    - Quản lí tài nguyên ảnh dễ dàng.
    - Tương thích với ứng dụng Mobile: phần cứng bị hạn chế và cần tiết kiệm pin.

# Nhược điểm:
    - Khó khăn trong việc bảo trì: khi thay đổi 1 ảnh nhỏ bạn cần cập nhật toàn bộ file Atlas lớn
    thay vì chỉ 1 file nhỏ.
    - Có độ trễ khi cập nhât.
    - Vì dùng các công cụ Packer để tự động hoá việc xắp xếp nên khi quản lí thủ công rất dễ sai xót.


# => Auto Atlas có thể giải quyết một số nhược điểm của Atlas trong Cocos.
    - Auto Atlas là: một công cụ của Cocos để hỗ trợ tự động gom nhiều sprite ảnh nhỏ trong cùng Folder thành một ảnh lớn.
    - Khi Auto Atlas các sprite ảnh trong Folder hoặc ảnh trong Folder con trong folder đó sẽ cùng được gom lại.
    - Nếu các tài nguyên sprite được chỉnh sửa thì nó vẫn giữ nguyên trong Atlas được tạo ra.    
    - Khi Auto Atlas được tạo bạn có thể dùng các sprite để dựng các hoạt cảnh và Cocos Creator sẽ tự động đóng gói các tài
    nguyên thuộc Auto Atlas thành Atlat và tự động cập nhật và tham chiếu đến nó trong toàn bộ Project.

- Nguyên lí hoạt động của Auto Atlas:
    -
    - Duyệt tất cả sprite ảnh đã được đánh dấu.
    - Đóng gói: hệ thống sẽ tự động sắp xếp các ảnh nhỏ vào một ảnh lớn bằng thuật toán Packing ( sắp xếp các phần tử vào một mảng sao cho không vượt quá công suất của mảng đó) nhằm giảm khoảng trống và tối ưu kích thước Atlas( Nếu có nhiều sprite làm cho kích thước Atlas khong đủ để đóng gói tất cả sprite thì tạo ra thêm Atlas mới để đóng gói đủ chúng).
    - Tạo ra ảnh Atlas: Tạo ra một file .PNG chứa toàn bộ sprite ảnh được đóng gói trước đó với kích thước đã được tối ưu.
    - Tạo file chỉ mục: thường là file (text) có đuôi .atlas 
    dùng để tạo dữ liệu vị trí của sprite, kích thước sprite nhờ đó Engine biết sprite nằm ở vị trí nào, góc nào, kích thước bao nhiêu.
    - Runtime:  Thay vì load nhiều sprite ảnh nhỏ thì chỉ cần load Atlas lớn. Qua đó giảm Draw Call, Tăng FPS, giảm lag,...


- ## Các lưu ý khi dùng Auto Atlas:
    - Padding: Do các sprite được xếp cùng file PNG và được GPU lấy màu của các pixel lân cận để làm mượt ảnh nên khi các Padding ảnh quá gần sẽ lấy luôn màu của sprite ảnh lân cận làm lem màu hoặc nhoè ảnh.
    - Chỉ Auto Atlas những sprite load cùng lúc lên màn hình vì khi load một ảnh thì Engine vẫn load toàn bộ file Atlas.
    - Kích thước hợp lí: không quá lớn (tốn bộ nhớ), không quá nhỏ (dễ tạo nhiều Atlas) tăng Draw call.




