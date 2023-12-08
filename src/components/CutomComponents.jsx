import { InputBase, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const StyledInput = () => {
  return (
    <div style={{ position: "relative" }}>
      <InputBase
        placeholder="Read more"
        sx={{
          borderRadius: "9px",
          border: "1px solid #646464",
          background:
            "var(--ggg, linear-gradient(121deg, #272727 14.82%, #383838 70.82%))",
          boxShadow: "0px 20px 50px 0px rgba(0, 0, 0, 0.30)",
          width: "100%",
          my: 3,
          pl: 2,
          py: 0.8,
        }}
      />
      <IconButton
        aria-label="send"
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          color: "#fff",
        }}
      >
        <SendIcon />
      </IconButton>
    </div>
  );
};
