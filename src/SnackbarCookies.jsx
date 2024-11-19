import React, { useState, useEffect } from "react";
import { Snackbar, Alert, Button, Box } from "@mui/material";

function CookieCheckSnackbar({ cookiesEnabled, setCookiesEnabled }) {
  return (
    <>
      {!cookiesEnabled && (
        <Snackbar open={!cookiesEnabled}
          //  autoHideDuration={10000} 
          onClose={() => setCookiesEnabled(true)}
        >
          <Alert

            onClose={() => setCookiesEnabled(true)}
            severity="warning"
          >
            <Box sx={{ textAlign: "left" }}>
              <p>It seems third-party cookies are disabled in your browser. </p>
              <p> Due to this you are unable to access resources. </p>
              <p>Please enable them for better functionality.</p>
            </Box>
            <Button
              color="inherit"
              size="small"
              onClick={() =>
                window.open(
                  "https://support.google.com/chrome/answer/95647",
                  "_blank"
                )
              }
              variant="outlined"
            >
              Learn More
            </Button>
          </Alert>

        </Snackbar>
      )}
    </>
  );
}

export default CookieCheckSnackbar;
