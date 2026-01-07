async function checkDiscordID() {
  const discordId = document.getElementById("discordId").value;
  const resultDiv = document.getElementById("result");

  if (!discordId) {
    resultDiv.innerHTML = "<p>Please enter a Discord ID.</p>";
    return;
  }

  resultDiv.innerHTML = "<p>Loading...</p>";

  try {
    // Replace with your bot token and guild ID
    const response = await fetch(
      `https://discord.com/api/v9/users/${discordId}?guild_id=124408`,
      {
        headers: {
          Authorization: "Bot MTQ1Oc",
        },
      }
    );

    const data = await response.json();

    if (response.status === 200) {
      const ipResponse = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipResponse.json();

      resultDiv.innerHTML = `
        <p><strong>Discord User ID:</strong> ${discordId}</p>
        <p><strong>Username:</strong> ${data.username}#${data.discriminator}</p>
        <p><strong>IP Address:</strong> ${ipData.ip}</p>
      `;
    } else {
      resultDiv.innerHTML = `<p>Discord ID not found: ${data.message}</p>`;
    }
  } catch (error) {
    resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}
