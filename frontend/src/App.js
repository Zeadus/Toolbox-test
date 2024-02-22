/* eslint-disable react-hooks/exhaustive-deps */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Files from "./api/services/files";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [filter, setFilter] = useState("");
  const filesData = Files.useGetFilesData(filter);

  const onChangeFilter = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    console.log("?");
    const timeOutId = setTimeout(() => filesData.refetch(), 1000);
    return () => clearTimeout(timeOutId);
  }, [filter]);

  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Form>
              <Form.Group className="mb-3" controlId="filter">
                <Form.Label>Filter</Form.Label>
                <Form.Control
                  value={filter}
                  onChange={onChangeFilter}
                  type="text"
                  placeholder="test.csv"
                />
                <Form.Text className="text-muted">
                  Filter by file name. Ex: test2.csv
                </Form.Text>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>File Name</th>
                  <th>Text</th>
                  <th>Number</th>
                  <th>Hex</th>
                </tr>
              </thead>
              {filesData.data && (
                <tbody>
                  {filesData.data.map((data) => (
                    <tr>
                      <td>{data.file}</td>
                      <td>{data.text}</td>
                      <td>{data.number}</td>
                      <td>{data.hex}</td>
                    </tr>
                  ))}
                </tbody>
              )}
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
