import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1 className="mt-4" style={{ fontWeight: "bold" }}>
        About Us
      </h1>
      <div className="container text-left">
        <div class="card w-100 mt-3">
          <div class="card-body">
            <h5 class="card-title" style={{fontWeight:"bold", color: "#0d6efd" }}>
              Introduction
            </h5>
            <p class="card-text">
              It is a tool made for people to share their secret messages with
              each other, which no one except the people who know the key can
              access. <br />
              In Caesar Cipher one of the oldest encryption technique,
              <i> Lorem Ipsum</i> using key 10 is encrypted as{" "}
              <i>Vybow Szcew</i>. After a little reflection a person will get
              that these are just the letters shifted, L to V (i.e., L, M, N ...
              10 → V), o to y (i.e., o, p, q, ... 10 → y) and so on. We can see
              that anyone after some hit and trials can access the text without
              key. But the text encrypted through self made encryption technique
              used in <i>encrypIT</i> is nearly impossible to access through hit
              and trials.
            </p>
            <Link to="/" class="btn btn-primary">
              Visit Home
            </Link>
          </div>
        </div>
        <div class="card w-100 mt-3">
          <div class="card-body">
            <h5 class="card-title" style={{fontWeight:"bold", color: "#0d6efd" }}>Encrypt</h5>
            <p class="card-text">
              You can encrypt text of any length using any desired key (can only
              be a number) and then let selected people to access the text.
            </p>
            <Link to="/" class="btn btn-primary">
              Encrypt Your Text
            </Link>
          </div>
        </div>
        <div class="card w-100 mt-3">
          <div class="card-body">
            <h5 class="card-title" style={{fontWeight:"bold", color: "#0d6efd" }}>Decrypt</h5>
            <p class="card-text">
              Once you get a encrypted text from anyone, you can use the
              decryption tool to decrypt the text with the same key using which
              it was encrypted.
            </p>
            <Link to="/decrypt" class="btn btn-primary">
              Decrypt Your Text
            </Link>
          </div>
        </div>
        <div class="card w-100 my-3">
          <div class="card-body">
            <h5 class="card-title mb-4" style={{fontWeight:"bold", color: "#0d6efd" }}>Meet the Developer</h5>
            <p class="card-text">
              <ul class="list-group">
                <li class="list-group-item active" aria-current="true">
                  <strong>Developed by: </strong>
                </li>
                <li class="list-group-item " aria-current="true">
                  <strong>Mouzin Gulzar</strong>
                </li>
              </ul>
            </p>
          </div>
          <div class="card-body">
            <p class="card-text">
              <ul class="list-group">
                <li class="list-group-item active" aria-current="true">
                  <strong>Contact: </strong>
                </li>
                <li class="list-group-item ">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:%20mouzingulzar.work@gmail.com"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <strong>Mail</strong>
                  </a>
                </li>
                <li class="list-group-item ">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/mouzin_monis"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <span>
                      <b>Instagram</b>
                    </span>
                  </a>
                </li>
                <li class="list-group-item">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://m.facebook.com/100027488494051"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <span>
                      <b>Facebook</b>
                    </span>
                  </a>
                </li>
              </ul>
            </p>
          </div>

          <div class="card-body">
            <p class="card-text">
              <ul class="list-group">
                <li class="list-group-item active">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:mouzingulzar.work@gmail.com?subject=Feedback%20-%20encrypIT"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span>
                      <b>Feedback</b>
                    </span>
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
