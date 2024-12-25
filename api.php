<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "DonutDB";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed: " . $conn->connect_error]));
}

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'GET':
        $sql = "SELECT * FROM Donuts";
        $result = $conn->query($sql);
        $donuts = [];
        while ($row = $result->fetch_assoc()) {
            $donuts[] = $row;
        }
        echo json_encode($donuts);
        break;

    case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        $stmt = $conn->prepare("INSERT INTO Donuts (name, description, price) VALUES (?, ?, ?)");
        $stmt->bind_param("ssd", $data['name'], $data['description'], $data['price']);
        $stmt->execute();
        echo json_encode(["success" => true, "id" => $stmt->insert_id]);
        break;

    case 'PUT':
        $data = json_decode(file_get_contents("php://input"), true);
        $stmt = $conn->prepare("UPDATE Donuts SET name=?, description=?, price=? WHERE id=?");
        $stmt->bind_param("ssdi", $data['name'], $data['description'], $data['price'], $data['id']);
        $stmt->execute();
        echo json_encode(["success" => true]);
        break;

    case 'DELETE':
        $data = json_decode(file_get_contents("php://input"), true);
        $stmt = $conn->prepare("DELETE FROM Donuts WHERE id=?");
        $stmt->bind_param("i", $data['id']);
        $stmt->execute();
        echo json_encode(["success" => true]);
        break;

    default:
        echo json_encode(["error" => "Invalid request method"]);
        break;
}

$conn->close();
?>
