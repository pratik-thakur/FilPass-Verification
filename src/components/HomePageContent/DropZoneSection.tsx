import React, { Component, ReactNode } from "react";
import { connect } from "react-redux";
import { NETWORK_NAME } from "../../config";
import { updateCertificate } from "../../reducers/certificate.actions";
import { WrappedOrSignedOpenCertsDocument } from "../../shared";
import { CertificateDropZoneContainer } from "../CertificateDropZone";

const DEMO_CERT = `/static/demo/${NETWORK_NAME}.opencert`;


interface DropZoneSectionProps {
  updateCertificate: (certificate: WrappedOrSignedOpenCertsDocument) => void;
}
class DropZoneSection extends Component<DropZoneSectionProps> {
  constructor(props: DropZoneSectionProps) {
    super(props);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(): void {
    const elementDrop = document.getElementById("demoDrop");
    if (elementDrop) {
      elementDrop.addEventListener("drop", this.handleDrop);
    }
    const elementClick = document.getElementById("demoClick");
    if (elementClick) {
      elementClick.addEventListener("click", this.handleClick);
    }
  }
  handleDrop(event: DragEvent): void {
    if (event.dataTransfer && event.dataTransfer.getData(DEMO_CERT)) {
      window
        .fetch(DEMO_CERT)
        .then((res) => res.json())
        .then((res) => {
          this.props.updateCertificate(res);
        });
    }
  }
  handleClick(): void {
    window
      .fetch(DEMO_CERT)
      .then((res) => res.json())
      .then((res) => {
        this.props.updateCertificate(res);
      });
  }

  componentWillUnmount(): void {
    const elementDrop = document.getElementById("demoDrop");
    if (elementDrop) {
      elementDrop.removeEventListener("drop", this.handleDrop);
    }
    const elementClick = document.getElementById("demoClick");
    if (elementClick) {
      elementClick.removeEventListener("click", this.handleClick);
    }
  }

  render(): ReactNode {
    return (
      <section className="py-12" style={{ backgroundImage: "url('/static/images/bg.png')" }}>
        <div className="container">
          <div className="flex flex-wrap">
            <div
              className="w-full lg:w-1/3 lg:pr-10 text-center lg:text-left py-10"
              style={{ "font-family": "'DM Sans', sans-serif" }}
            >
              <h1 className="text-white mb-5 font-semibold py-3">
                An easy way to check and verify your OpenCerts documents
              </h1>
              <p className="text-gray-500">
                The section would automatically show the result of the verification, and also render the certificate if
                it is authentic
              </p>
            </div>
            <div className="w-full lg:w-2/3 lg:pl-10" id="demoDrop">
              <CertificateDropZoneContainer />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export const DropZoneSectionContainer = connect(null, (dispatch) => ({
  updateCertificate: (payload: WrappedOrSignedOpenCertsDocument) => dispatch(updateCertificate(payload)),
}))(DropZoneSection);
