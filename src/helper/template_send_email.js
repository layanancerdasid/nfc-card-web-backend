const { baseUrl } = require("./app");

const htmlTemplate = (data) => {
  return `<!DOCTYPE html>

    <html
      lang="en"
      xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:v="urn:schemas-microsoft-com:vml"
    >
      <head>
        <title></title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <!--[if mso
          ]><xml
            ><o:OfficeDocumentSettings
              ><o:PixelsPerInch>96</o:PixelsPerInch
              ><o:AllowPNG /></o:OfficeDocumentSettings></xml
        ><![endif]-->
        <!--[if !mso]><!-->
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Serif"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Work+Sans:wght@700&display=swap"
          rel="stylesheet"
          type="text/css"
        />
        <!--<![endif]-->
        <style>
          * {
            box-sizing: border-box;
          }
    
          body {
            margin: 0;
            padding: 0;
          }
    
          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: inherit !important;
          }
    
          #MessageViewBody a {
            color: inherit;
            text-decoration: none;
          }
    
          p {
            line-height: inherit;
          }
    
          .desktop_hide,
          .desktop_hide table {
            mso-hide: all;
            display: none;
            max-height: 0px;
            overflow: hidden;
          }
    
          .image_block img + div {
            display: none;
          }
    
          @media (max-width: 720px) {
            .desktop_hide table.icons-inner {
              display: inline-block !important;
            }
    
            .icons-inner {
              text-align: center;
            }
    
            .icons-inner td {
              margin: 0 auto;
            }
    
            .mobile_hide {
              display: none;
            }
    
            .row-content {
              width: 100% !important;
            }
    
            .stack .column {
              width: 100%;
              display: block;
            }
    
            .mobile_hide {
              min-height: 0;
              max-height: 0;
              max-width: 0;
              overflow: hidden;
              font-size: 0px;
            }
    
            .desktop_hide,
            .desktop_hide table {
              display: table !important;
              max-height: none !important;
            }
    
            .row-13 .column-1 .block-1.heading_block h1,
            .row-13 .column-2 .block-1.paragraph_block td.pad > div,
            .row-14 .column-2 .block-1.paragraph_block td.pad > div,
            .row-3 .column-1 .block-4.heading_block h1,
            .row-6 .column-2 .block-1.heading_block h1,
            .row-6 .column-2 .block-2.heading_block h1,
            .row-6 .column-2 .block-3.paragraph_block td.pad > div,
            .row-7 .column-2 .block-1.heading_block h1,
            .row-7 .column-2 .block-2.heading_block h1,
            .row-7 .column-2 .block-3.paragraph_block td.pad > div {
              text-align: center !important;
            }
    
            .row-13 .column-2 .block-1.paragraph_block td.pad {
              padding: 0 !important;
            }
    
            .row-14 .column-1,
            .row-2 .column-1,
            .row-4 .column-1,
            .row-9 .column-1 {
              padding: 20px 10px !important;
            }
    
            .row-2 .column-2 {
              padding: 5px 25px 20px !important;
            }
    
            .row-6 .column-1,
            .row-7 .column-1 {
              padding: 15px 25px 0 !important;
            }
    
            .row-6 .column-2,
            .row-7 .column-2 {
              padding: 15px 20px 25px !important;
            }
    
            .row-10 .column-1 {
              padding: 40px 20px !important;
            }
    
            .row-12 .column-1 {
              padding: 0 20px 40px !important;
            }
    
            .row-13 .column-1 {
              padding: 40px 25px 25px !important;
            }
    
            .row-13 .column-2 {
              padding: 5px 25px 40px !important;
            }
    
            .row-14 .column-2 {
              padding: 5px 30px 20px 25px !important;
            }
          }
        </style>
      </head>
      <body
        style="
          background-color: #f7f7f7;
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: none;
          text-size-adjust: none;
        "
      >
        <table
          border="0"
          cellpadding="0"
          cellspacing="0"
          class="nl-container"
          role="presentation"
          style="
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            background-color: #f7f7f7;
          "
          width="100%"
        >
          <tbody>
            <tr>
              <td>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-1"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-radius: 0;
                            color: #000000;
                            width: 700px;
                            margin: 0 auto;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  padding-bottom: 5px;
                                  padding-top: 5px;
                                  vertical-align: top;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <div
                                  class="spacer_block block-1"
                                  style="
                                    height: 15px;
                                    line-height: 15px;
                                    font-size: 1px;
                                  "
                                >
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-2"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-image: url('images/Header-bg.png');
                            background-repeat: no-repeat;
                            background-size: cover;
                            background-color: #4f5aba;
                            border-radius: 0;
                            color: #000000;
                            width: 700px;
                            margin: 0 auto;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  padding-bottom: 20px;
                                  padding-left: 30px;
                                  padding-right: 10px;
                                  padding-top: 20px;
                                  vertical-align: middle;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="33.333333333333336%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="image_block block-1"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td class="pad" style="width: 100%">
                                      <div
                                        align="center"
                                        class="alignment"
                                        style="line-height: 10px"
                                      >
                                        <div
                                          style="max-width: 193.33333333333331px"
                                        >
                                          <a
                                            href="https://www.example.com"
                                            style="outline: none"
                                            tabindex="-1"
                                            target="_blank"
                                            ><img
                                              alt="LOGO EMAIL"
                                              src="images/.png"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                                width: 100%;
                                              "
                                              title="your-logo"
                                              width="193.33333333333331"
                                          /></a>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td
                                class="column column-2"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  padding-bottom: 5px;
                                  padding-left: 25px;
                                  padding-right: 30px;
                                  padding-top: 5px;
                                  vertical-align: middle;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="66.66666666666667%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="empty_block block-1"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td class="pad">
                                      <div></div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-3"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #efeef4;
                            border-bottom: 0 solid #efeef4;
                            border-left: 0 solid #efeef4;
                            border-right: 0px solid #efeef4;
                            border-top: 0 solid #efeef4;
                            color: #000000;
                            width: 700px;
                            margin: 0 auto;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  padding-bottom: 25px;
                                  padding-left: 25px;
                                  padding-right: 25px;
                                  padding-top: 35px;
                                  vertical-align: top;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="icons_block block-1"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        vertical-align: middle;
                                        color: #4f5aba;
                                        font-family: 'Noto Serif', Georgia, serif;
                                        font-size: 24px;
                                        letter-spacing: 0px;
                                        padding-bottom: 10px;
                                        padding-top: 10px;
                                        text-align: center;
                                      "
                                    >
                                      <table
                                        align="center"
                                        cellpadding="0"
                                        cellspacing="0"
                                        class="alignment"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                        "
                                      >
                                        <tr>
                                          <td
                                            style="
                                              vertical-align: middle;
                                              text-align: center;
                                              padding-top: 0px;
                                              padding-bottom: 0px;
                                              padding-left: 20px;
                                              padding-right: 20px;
                                            "
                                          >
                                         
                                           <img
                                                align="center"
                                                alt="${baseUrl(
                                                  data.req
                                                )}/images/3143370.png"
                                                class="icon"
                                                height="128"
                                                
                                                src="cid:${data.str_body_image}"
                                                style="
                                                  display: block;
                                                  height: auto;
                                                  margin: 0 auto;
                                                  border: 0;
                                                "
                                                width="300"
                                            />
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="heading_block block-2"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        padding-top: 10px;
                                        text-align: center;
                                        width: 100%;
                                      "
                                    >
                                      <h1
                                        style="
                                          margin: 0;
                                          color: #4f5aba;
                                          direction: ltr;
                                          font-family: 'Noto Serif', Georgia, serif;
                                          font-size: 30px;
                                          font-weight: 700;
                                          letter-spacing: normal;
                                          line-height: 120%;
                                          text-align: center;
                                          margin-top: 0;
                                          margin-bottom: 0;
                                          mso-line-height-alt: 49.199999999999996px;
                                        "
                                      >
                                        <span class="tinyMce-placeholder"
                                          >Hai ${data.name}, Selamat datang di
                                          POD-EX</span
                                        >
                                      </h1>
                                    </td>
                                  </tr>
                                </table>
    
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="paragraph_block block-5"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        padding-left: 10px;
                                        padding-right: 10px;
                                      "
                                    >
                                      <div
                                        style="
                                          color: #201f42;
                                          direction: ltr;
                                          font-family: Inter, sans-serif;
                                          font-size: 16px;
                                          font-weight: 400;
                                          letter-spacing: 0px;
                                          line-height: 180%;
                                          text-align: center;
                                          mso-line-height-alt: 28.8px;
                                        "
                                      >
                                        <p style="margin-top: 20px">
                                          Kami telah menerima permintaan untuk
                                          memverifikasi alamat email Anda di POD-EX.
                                          Untuk memverifikasi alamat email Anda,
                                          silakan masukkan kode OTP ini:
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="button_block block-6"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        padding-bottom: 15px;
                                        padding-top: 20px;
                                        text-align: center;
                                      "
                                    >
                                      <div align="center" class="alignment">
                                        <a
                                          href="https://www.example.com"
                                          style="
                                            text-decoration: none;
                                            display: inline-block;
                                            color: #ffffff;
                                            background-color: #201f42;
                                            border-radius: 0px;
                                            width: auto;
                                            border-top: 1px solid #201f42;
                                            font-weight: 400;
                                            border-right: 1px solid #201f42;
                                            border-bottom: 1px solid #201f42;
                                            border-left: 1px solid #201f42;
                                            padding-top: 5px;
                                            padding-bottom: 5px;
                                            font-family: 'Noto Serif', Georgia,
                                              serif;
                                            font-size: 16px;
                                            text-align: center;
                                            mso-border-alt: none;
                                            word-break: keep-all;
                                          "
                                          target="_blank"
                                          ><span
                                            style="
                                              padding-left: 30px;
                                              padding-right: 30px;
                                              font-size: 16px;
                                              display: inline-block;
                                              letter-spacing: normal;
                                            "
                                            ><span
                                              style="
                                                word-break: break-word;
                                                line-height: 32px;
                                              "
                                              >${data.otp}</span
                                            ></span
                                          ></a
                                        >
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
    
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-13"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-image: url('images/Header-bg.png');
                            background-repeat: no-repeat;
                            background-size: cover;
                            background-color: #4f5aba;
                            border-radius: 0;
                            color: #000000;
                            width: 700px;
                            margin: 0 auto;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  padding-bottom: 40px;
                                  padding-left: 25px;
                                  padding-right: 25px;
                                  padding-top: 40px;
                                  vertical-align: middle;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="50%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="heading_block block-1"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        padding-bottom: 5px;
                                        padding-left: 10px;
                                        padding-top: 5px;
                                        text-align: center;
                                        width: 100%;
                                      "
                                    >
                                      <h6
                                        style="
                                          margin: 0;
                                          color: #ffffff;
                                          direction: ltr;
                                          font-family: 'Noto Serif', Georgia, serif;
                                          font-size: 20px;
                                          font-weight: 700;
                                          letter-spacing: normal;
                                          line-height: 120%;
                                          text-align: left;
                                          margin-top: 0;
                                          margin-bottom: 0;
                                          mso-line-height-alt: 48px;
                                        "
                                      >
                                        <span class="tinyMce-placeholder"
                                          >Info lebih lanjut?<br
                                        /></span>
                                      </h6>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td
                                class="column column-2"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  padding-bottom: 40px;
                                  padding-left: 25px;
                                  padding-right: 25px;
                                  padding-top: 40px;
                                  vertical-align: middle;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="50%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="paragraph_block block-1"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td class="pad" style="padding-right: 10px">
                                      <div
                                        style="
                                          color: #ffffff;
                                          direction: ltr;
                                          font-family: Inter, sans-serif;
                                          font-size: 16px;
                                          font-weight: 400;
                                          letter-spacing: 0px;
                                          line-height: 120%;
                                          text-align: right;
                                          mso-line-height-alt: 19.2px;
                                        "
                                      >
                                        <p style="margin: 0">
                                          <a
                                            href="https://wa.me/6285559059632"
                                            rel="noopener"
                                            style="
                                              text-decoration: underline;
                                              color: #ffffff;
                                            "
                                            target="_blank"
                                            ><u>Hubungi Kami</a
                                          >
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-14"
                  role="presentation"
                  style="
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    background-size: auto;
                  "
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-radius: 0;
                            color: #000000;
                            background-size: auto;
                            background-color: #201f42;
                            width: 700px;
                            margin: 0 auto;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  padding-bottom: 20px;
                                  padding-left: 30px;
                                  padding-right: 10px;
                                  padding-top: 20px;
                                  vertical-align: middle;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="33.333333333333336%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="image_block block-1"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        width: 100%;
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                    >
                                      <div
                                        align="center"
                                        class="alignment"
                                        style="line-height: 10px"
                                      >
                                        <div
                                          style="max-width: 154.66666666666663px"
                                        >
                                          <a
                                            href="https://www.example.com"
                                            style="outline: none"
                                            tabindex="-1"
                                            target="_blank"
                                            ><img
                                              alt="your logo"
                                              src="images/.png"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                                width: 100%;
                                              "
                                              title="your logo"
                                              width="154.66666666666663"
                                          /></a>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td
                                class="column column-2"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  padding-bottom: 5px;
                                  padding-left: 25px;
                                  padding-right: 30px;
                                  padding-top: 5px;
                                  vertical-align: middle;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="66.66666666666667%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="paragraph_block block-1"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td class="pad">
                                      <div
                                        style="
                                          color: #ffffff;
                                          direction: ltr;
                                          font-family: Inter, sans-serif;
                                          font-size: 14px;
                                          font-weight: 400;
                                          letter-spacing: 0px;
                                          line-height: 120%;
                                          text-align: right;
                                          mso-line-height-alt: 16.8px;
                                        "
                                      >
                                        <p style="margin: 0">
                                          Copyright © 2024 Layanan Cerdas Indonesia
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- End -->
      </body>
    </html>
    `;
};

module.exports = { htmlTemplate };
