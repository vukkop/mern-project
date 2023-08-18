import React from 'react'

const ListingForm = () => {
  const { initialName,
    initialImgUrl,
    initialNumChests,
    initialPosition,
    initialPegLeg,
    initialEyePatch,
    initialHookHand,
    initialCatchPhrase,
    onSubmitProp } = props;
  const [name, setName] = useState(initialName);
  const [imgUrl, setImgUrl] = useState(initialImgUrl);
  const [numChests, setNumChests] = useState(initialNumChests);
  const [position, setPosition] = useState(initialPosition);
  const [pegLeg, setPegLeg] = useState(initialPegLeg);
  const [eyePatch, setEyePatch] = useState(initialEyePatch);
  const [hookHand, setHookHand] = useState(initialHookHand);
  const [catchPhrase, setCatchPhrase] = useState(initialCatchPhrase);


  const handleSubmit = e => {
    e.preventDefault();
    onSubmitProp({
      name,
      imgUrl,
      numChests,
      position,
      pegLeg,
      eyePatch,
      hookHand,
      catchPhrase,
    });
    setName("");
    setImgUrl("");
    setNumChests("");
    setPosition("");
    setPegLeg(true);
    setEyePatch(true);
    setHookHand(true);
    setCatchPhrase("");
  }
  // const onChangeHandler = (e) => {
  //   const { name, value } = e.target
  //   setPirate((prev) => ({ ...prev, [name]: value }))
  // }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div>
                  <TextField
                    name='name'
                    label="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className='mb-4'
                  />
                </div>

                <div>
                  <TextField
                    name='numOfBedrooms'
                    type='number'
                    label="Number Of Bedrooms"
                    onChange={(e) => setNumChests(e.target.value)}
                    value={numChests}
                    className='mb-4'
                  />
                </div>
                <div>
                  <TextField
                    name='description'
                    label="Description"
                    onChange={(e) => setImgUrl(e.target.value)}
                    value={imgUrl}
                    className='mb-4'
                  />
                </div>
                <div>
                  <TextField
                    name='price'
                    type='number'
                    label="Price"
                    onChange={(e) => setNumChests(e.target.value)}
                    value={numChests}
                    className='mb-4'
                  />
                </div>
                <div>
                  <TextField
                    name='imgUrl'
                    label="Image Url"
                    onChange={(e) => setImgUrl(e.target.value)}
                    value={imgUrl}
                    className='mb-4'
                  />
                </div>
              </div>
              <div className="col-6">

                <div>
                  <FormControl sx={{ minWidth: 210 }}>
                    <InputLabel id="select-label">Crew Position</InputLabel>
                    <Select
                      labelId="select-label"
                      name='position'
                      value={position}
                      label="Crew Position"
                      onChange={(e) => setPosition(e.target.value)}
                      className='mb-4'
                    >
                      <MenuItem value={"Captain"}>Captain</MenuItem>
                      <MenuItem value={"First Mate"}>First Mate</MenuItem>
                      <MenuItem value={"Quarter Master"}>Quarter Master</MenuItem>
                      <MenuItem value={"Boatswain"}>Boatswain</MenuItem>
                      <MenuItem value={"Powder Monkey"}>Powder Monkey</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <FormControlLabel control={
                    <Checkbox name='pegLeg' checked={pegLeg}
                      onChange={(e) => setPegLeg(e.target.checked)}
                    />
                  } label="Peg Leg" />
                </div>
                <div>
                  <FormControlLabel control={
                    <Checkbox name='eyePatch' checked={eyePatch}
                      onChange={(e) => setEyePatch(e.target.checked)}
                    />
                  } label="Eye Patch" />
                </div>
                <div>
                  <FormControlLabel control={
                    <Checkbox name='hookHand' checked={hookHand}
                      onChange={(e) => setHookHand(e.target.checked)}
                    />
                  } label="Hook Hand" />
                </div>
                <button type='submit' className="btn btn-primary ms-2 mt-4"> Add Pirate</button>

              </div>

            </div>
          </div>

        </div>
      </form>
    </div>
  )
}

export default ListingForm
