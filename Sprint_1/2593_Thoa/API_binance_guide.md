# API Binance Tutorial
## Tất cả các API mà binace hỗ trợ
Binance là một sàn giao dịch tiền điện tử lớn trên toàn cầu và cung cấp nhiều API khác nhau để cho phép các nhà phát triển tích hợp vào hệ thống của họ. Dưới đây là danh sách các API mà Binance cung cấp:

    1. **Binance Spot API**: Cung cấp các API để giao dịch tiền điện tử, bao gồm các chức năng như lấy thông tin tài khoản, tạo đơn đặt hàng và xử lý các đơn đặt hàng.

    2. **Binance Futures API**: Cung cấp các API để giao dịch hợp đồng tương lai, bao gồm các chức năng như lấy thông tin tài khoản, tạo đơn đặt hàng và xử lý các đơn đặt hàng.

    3. **Binance Margin API**: Cung cấp các API để giao dịch với sử dụng đòn bẩy, bao gồm các chức năng như lấy thông tin tài khoản, tạo đơn đặt hàng và xử lý các đơn đặt hàng.

    4. **Binance Lending API**: Cung cấp các API để cho phép người dùng cho vay hoặc vay tiền, bao gồm các chức năng như tạo khoản cho vay và vay.

    5. **Binance Staking API**: Cung cấp các API để cho phép người dùng bỏ phiếu và tham gia các chương trình staking của Binance.

    6. **Binance Savings API**: Cung cấp các API để cho phép người dùng tham gia các chương trình tiết kiệm tiền điện tử.

    7. **Binance Mining API**: Cung cấp các API để cho phép người dùng tham gia khai thác tiền điện tử.

    8. **Binance Wallet API**: Cung cấp các API để cho phép người dùng quản lý các địa chỉ ví tiền điện tử của họ.

    9. **Binance Pay API**: Cung cấp các API để cho phép người dùng thanh toán bằng tiền điện tử.

    10. **Binance Charity API**: Cung cấp các API để cho phép người dùng đóng góp tiền điện tử cho các tổ chức từ thiện.

Chú ý rằng, để sử dụng các API này, người dùng cần đăng ký một tài khoản trên Binance và tạo một khóa API. Các chi tiết về cách sử dụng các API này được Binance cung cấp trong tài liệu API của họ.

## Ví dụ về các API mà binance có hỗ trợ
Dưới đây là một vài ví dụ cho các API của Binance:

    1. **Binance Spot API**: Để lấy thông tin tài khoản của người dùng, bạn có thể sử dụng API endpoint sau: https://api.binance.com/api/v3/account

    2. **Binance Futures API**: Để tạo một đơn đặt hàng mới, bạn có thể sử dụng API endpoint sau: https://fapi.binance.com/fapi/v1/order

    3. **Binance Margin API**: Để lấy lịch sử giao dịch của tài khoản margin, bạn có thể sử dụng API endpoint sau: https://api.binance.com/sapi/v1/margin/myTrades

    4. **Binance Lending API**: Để lấy thông tin về lãi suất cho một loại tiền điện tử cụ thể, bạn có thể sử dụng API endpoint sau: https://api.binance.com/sapi/v1/lending/project/list

    5. **Binance Staking API**: Để lấy danh sách các đợt staking đang mở, bạn có thể sử dụng API endpoint sau: https://api.binance.com/sapi/v1/bswap/pools

    6. **Binance Savings API**: Để lấy danh sách các gói tiết kiệm đang mở, bạn có thể sử dụng API endpoint sau: https://api.binance.com/sapi/v1/lending/daily/product/list

    7. **Binance Mining API**: Để lấy thông tin về thu nhập khai thác của tài khoản, bạn có thể sử dụng API endpoint sau: https://api.binance.com/sapi/v1/mining/payment/list

    8. **Binance Wallet API**: Để lấy thông tin về số dư của địa chỉ ví, bạn có thể sử dụng API endpoint sau: https://api.binance.com/api/v3/account

    9. **Binance Pay API**: Để tạo một đơn hàng thanh toán bằng tiền điện tử, bạn có thể sử dụng API endpoint sau: https://api.binance.com/sapi/v1/payment/create

    10. **Binance Charity API**: Để lấy danh sách các hoạt động từ thiện hiện có, bạn có thể sử dụng API endpoint sau: https://api.binance.com/sapi/v1/charity/list/projects.

## Ví dụ về sử dụng API trong nodejs để tạo ví điện tử cho người dùng
    Khi người dùng gọi đến url '/createAccount' sử dụng nodejs và express để thực hiện tạo một ví điện tử cho người dùng <br>
    Để thực hiện tạo một ví điện tử cho người dùng khi họ gọi đến url '/createAccount' sử dụng nodejs và express, bạn có thể thực hiện các bước sau:<br>

    Cài đặt nodejs và express trên máy tính của bạn.<br>

    Tạo một file index.js và sử dụng Express để định nghĩa một route mới để xử lý yêu cầu khi người dùng gọi đến url '/createAccount'.<br>
    ```js
        const express = require('express');
        const Binance = require('binance-api-node').default;
        const app = express();

        const client = Binance({
        apiKey: 'your-api-key',
        apiSecret: 'your-api-secret'
        });

        app.post('/createAccount', function(req, res) {
            const userId = req.body.userId; // Get the user ID from the request body
            const wallet = await client.createMarginWallet(userId); // Create a new electronic wallet for the user
            res.send(wallet); // Send the wallet information back to the client
        });

        app.listen(3000, function() {
        console.log('Server started on port 3000');
        });
    ```
    Trong ví dụ trên, chúng ta đã sử dụng phương thức createMarginWallet của đối tượng client để tạo ra một địa chỉ ví điện tử mới cho người dùng. Sau đó, chúng ta trả về thông tin về ví điện tử đó cho người dùng bằng cách gọi phương thức send của đối tượng res.

    Lưu ý rằng để sử dụng Binance API, bạn cần có một tài khoản Binance và lấy được apiKey và apiSecret để sử dụng API này.
    Đoạn code này trong file index.js các bạn có thể lấy về và chạy thử.


    
