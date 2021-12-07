import React from "react";

interface DefaultViewProps {
  fileError: boolean;
}

export const DefaultView: React.FunctionComponent<DefaultViewProps> = ({ fileError }) => (
  <>
    <div className="mx-auto mb-4" style={{ width: "120px" }}>
      <img alt=".opencert Dropzone" src="/static/images/dropzone/dropzone_illustration.svg" />
    </div>
    {fileError && (
      <p className="text-pink mb-2">File cannot be read. Please check that you have a valid .opencert file</p>
    )}
    <h4 className="font-source-sans-pro text-gray-900 mb-2">Drag and drop .opencert file here</h4>
    <div className="text-gray-600">
      <p>.opencert up to 10 MB</p>
      <div className="flex flex-wrap items-center justify-center my-3">
        <div className="w-1/3">
          <hr />
        </div>
        <div className="w-auto px-8">
          <p>or</p>
        </div>
        <div className="w-1/3">
          <hr />
        </div>
      </div>
    </div>
    <div className="mx-auto">
      <button
        type="button"
        className="button bg-white hover:bg-blue text-blue hover:text-white border border-solid border-blue"
      >
        Select File
      </button>
    </div>
  </>
);
